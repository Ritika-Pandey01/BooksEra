# BooksEra

BooksEra is an ecommerce book website that offers a seamless shopping experience for book enthusiasts. It incorporates user persona design, gathering valuable insights and suggestions from more than 30 users, ensuring a user-centric approach throughout the platform.


## Features

- **Bestselling Section** : The platform showcases the current 15 bestsellers according to the New York Times (NYT) by implementing the NYT Book API. Stay updated with the latest literary trends and popular titles.

- **Admin Page** : The admin interface allows easy addition of books to the MongoDB database. Admin-added books are automatically displayed on the home page for users to explore and purchase.

- **Cloudinary Integration** : The platform utilizes Cloudinary, a cloud-based media management platform, to store and manage images uploaded by the admin. This ensures optimal performance and availability of high-quality book images.

- **Secure Payment Processing** : Seamless and secure payment processing is enabled through the integration of the Stripe API. 

- **Sustainable Page** : BooksEra promotes a greener approach to literature consumption by featuring a dedicated sustainable page. Explore eco-friendly practices of reading books.

- **EmailJS Integration** : The contact us page incorporates EmailJS, allowing users to send emails directly from the platform for inquiries, feedback, or any other communication needs.

## Environment Variables

To run this project, you will need to add the following environment variables for the frontend to your .env file

- `REACT_APP_BOOK_API` : Generate an api key for New York Times API and then give access to the books api only 

- `REACT_APP_EMAILJS_SERVICE_ID` ,`REACT_APP_EMAILJS_TEMPLATE_ID` ,`REACT_APP_EMAILJS_PUBLIC_KEY` : Login to EmailJS and get all the credentials and also create a template.



The following environment variables are to be added for the backend .env file

- `DB_URL` : Login to mongoDB and write the db url here


- `JWT_KEY` : Write any secret sentence that you want to be used as a key

- `STRIPE_WEB_HOOK, STRIPE_KEY` :  Login to Stripe and get the stripe credentials along with the stripe web hook

- `CLIENT_URL` : http://localhost:3000 mention this url


- `CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET` : Login to Cloudinary and create a new folder for storing the images of the books, also give relevant access and get the api key and secret.



## Screenshots


## Run Locally

- Clone the project

```bash
  git clone https://github.com/Ritika-Pandey01/BooksEra
```

- Go to the project directory

```bash
  cd my-project
```

- Install dependencies

```bash
  npm install
```

- Set the environment variables

- Start the frontend and the backend

```bash
  npm run start
```

- Next, go  to : stripe dashboard-> developers -> webhooks -> add an endpoint -> test in local environment. Type stripe login in the cmd and sign in to your stripe account. Also allow access to your stripe project. Next, type : stripe listen --forward-to localhost:5000/api/stripe/webhook and hit enter.  The page shows listening to events on the stripe dashboard. Open a new tab of the cmd and trigger the payment using : stripe trigger payment_intent.succeeded. This will allow stripe api to listen to the event.

- Now the project is  up and running in your local machine.


## Acknowledgements
We would like to express our gratitude to the more than 30 users who provided valuable suggestions and feedback during the development of BooksEra. Your contributions have greatly shaped the user experience of this platform.  Thank you!
