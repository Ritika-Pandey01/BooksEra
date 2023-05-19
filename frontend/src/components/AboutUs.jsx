import React,{useRef }  from 'react';
import emailjs from '@emailjs/browser';

const AboutUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
          )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    
  return (
    <>
      <div className='about'>
      <div className='aboutus'>
      <img src='https://res.cloudinary.com/booksera/image/upload/v1684498616/Books/BooksEra_blcyyf.png'/>
      <h2>About Us</h2>
      <p><b>BooksEra</b> is an ecommerce book website with implementation of user persona design.
      We aim to provide a good user oriented experience through an online bookstore that not
    only caters to the needs of users who enjoy reading books but also provides them
    with features like the current list of bestsellers provided by the<b> New York Times </b> 
    and reminds them about the importance sustainable reading.
    </p>
      </div>
      <div className='contactus'>
      <h3>Contact Us</h3>
      <form ref={form} onSubmit={sendEmail}>
      <label className='form-label'>Name</label>
      <input type="text" name="user_name" className='form-control'/>
      <br/>
      <label className='form-label'>Email</label>
      <input type="email" name="user_email" className='form-control'/>
      <br/>
      <label className='form-label'>Message</label>
      <textarea name="message" className='form-control'/>
      <br/>
      <input type="submit" value="Send" className='btn btn-primary'/>
    </form>
      </div>
      
      </div>
    </>
  )
}

export default AboutUs
