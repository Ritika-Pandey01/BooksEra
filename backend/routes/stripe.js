const express = require("express");
const Stripe = require("stripe");
const {Order}=require("../models/order");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
    },
  });
  const line_items = req.body.cartItems.map((item) => {
    console.log(item);
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          images: [item.image.url],
          description: item.author,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });
    //session creates a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {allowed_countries: ['IN']},
  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 0, currency: 'inr'},
        display_name: 'Free shipping',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 5},
          maximum: {unit: 'business_day', value: 7},
        },
      },
    },
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 15000, currency: 'inr'},
        display_name: 'Next day air',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 1},
          maximum: {unit: 'business_day', value: 1},
        },
      },
    },
  ],
  phone_number_collection:{
    enabled:true
  },
  customer: customer.id,
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({ url: session.url });
  });

  //Creating Orders
const createOrder = async (customer, data,lineItems) => {
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products:lineItems.data,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
    //send email
  } catch (err) {
    console.log(err);
  }
};

  //Stripe webhook
let endpointSecret;

// endpointSecret = process.env.STRIPE_WEB_HOOK;

router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  //all this is to verify that the webhook is from stripe
  const sig = req.headers['stripe-signature'];
  let data;
    let eventType;

  if(endpointSecret){
    let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    console.log("Webhook verified");
  } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  data = event.data.object;
  eventType = event.type;
  }else{
    //if the webhook is not signing then we do this
    data = req.body.data.object;
      eventType = req.body.type;
  }

  

  // Handle the event session completed: i.e. if this event occurred we will perform these functions
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        stripe.checkout.sessions.listLineItems(
          data.id,
        {},
        function(err,lineItems){
          console.log("line_items",lineItems);
          createOrder(customer, data,lineItems);
        });
        
      })
      .catch((err) => console.log(err.message));
  }

  // Return a 200 res to acknowledge receipt of the event
  res.send().end();
});
  module.exports=router;