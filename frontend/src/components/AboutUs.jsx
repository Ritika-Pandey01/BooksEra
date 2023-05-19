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
      <p className='para'><b>BooksEra</b> is an ecommerce book website with implementation of user persona design.
      We aim to provide a good user oriented experience through an online bookstore that not
    only caters to the needs of users who enjoy reading books but also provides them
    with features like the current list of bestsellers provided by the<b> New York Times </b> 
    and reminds them about the importance sustainable reading.
    </p>
    
    <p className='info'><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg> Email :</b> ritikapandey0805@gmail.com</p>
    <p className='info'> <b>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg> Website :</b><a href='https://ritikapandeyportfolio.netlify.app/' className='link'> BooksEra Admin</a></p>
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
