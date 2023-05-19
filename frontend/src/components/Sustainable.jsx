import React from 'react';
import green from '../images/bgreen.jpg';
import delivery from '../images/delivery.png';
import ab from '../images/applebooks.png';
import gpb from '../images/gplaybooks.png';
import kindle from '../images/kindle.jpg';
const Sustainable = () => {
  return (
    <div className='sustain'>
      <h1>Sustainable Reading</h1>
      <p className='title'>Turning the page to a greener future  
      <span className='bookIcon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="darkgreen" class="bi bi-book" viewBox="0 0 16 16">
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg></span>
      </p>
      <div className='ourMotive'>
      
      <p>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="darkgreen" class="bi bi-tree-fill" viewBox="0 0 16 16">
      <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z"/>
      </svg>
      </span>
      The motive of our sustainable bookstore web application is 
      to revolutionize the way people discover, purchase, and experience
       books while prioritizing environmental consciousness. We aim to 
       provide a digital platform that not only offers an extensive 
       collection of sustainably sourced books but also promotes 
       eco-friendly practices throughout the entire book-buying process.
        Our application seeks to minimize paper waste by encouraging 
        suggestions for users to adopt sustainable reading habits.
        Additionally, we are committed to partnering with
        publishers and authors who prioritize sustainable printing methods
        and materials. By fostering a community of eco-conscious readers,
        we strive to inspire a deeper appreciation for both literature 
        and the planet, making sustainable reading an accessible and 
        enjoyable experience for all.</p>
      </div>
      <h2>Articles</h2>
      <div className='articles'>
      <div className='articleLinks'>
      <img src={green}/>
      <p>Paper, paper, and more paper! Books are...</p>
      <a href='https://www.youngwriters.co.uk/blog/sustainable-reading'>Read More 
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  
      </a>
      
      </div>
      <div className='articleLinks'>
      <img src={green}/>
      <p>Both printed and digital books have an environmental...</p>
      <a href='https://www.lifegate.com/sustainable-book-reading'>Read More
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  
      </a>
      </div>
      <div className='articleLinks'>
      <img src={green}/>
      <p>When it comes to thinking about the climate...</p>
      <a href='https://zerowastememoirs.com/baby-step-10-book-sustainability/'>Read More
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>  
      </a>
      </div>
      </div>

      <div className='ourTips'>
      <h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg>TIPS</h3>
<ul>
  <li><span className='subheading'>Utilize your local library : </span>  Instead of buying new books,
   borrow them from your local library.</li>
  <li><span className='subheading'>Share and exchange books : </span> Sharing books not only reduces
   the need for new purchases but also fosters a sense of community.</li>
  <li><span className='subheading'>Buy used or secondhand books : </span> When purchasing books, opt for used
   or secondhand copies instead of buying new ones. </li>
  <li><span className='subheading'>Choose sustainable reading materials : </span>Look for books made from
   recycled or responsibly sourced paper. </li>
  <li><span className='subheading'>Read digitally : </span>Embrace e-books and audiobooks as they require no 
  physical materials and significantly reduce paper waste.</li>
  <li><span className='subheading'>Donate or recycle unwanted books : </span>If you have books you no longer 
  need or want, donate them to libraries, schools, or charities.</li>
  <li><span className='subheading'>Choose sustainable bookmarks : </span> Instead of using disposable 
  bookmarks or scraps of paper, opt for sustainable alternatives.</li>
</ul>
      </div>
      <div className='packaging'>
      <img src={delivery}/>
      
      <h2>Sustainable Packaging and Delivery</h2>
      <ul>
        <li>We use minimal packaging whenever possible and
         avoid excessive layers, fillers, or unnecessary plastic wraps.</li>
         <li>We opt for packaging materials that are recyclable,
          biodegradable, or made from renewable resources.</li>
         <li>We uilize packaging materials made from recycled 
         content to reduce the demand for new materials. </li>
         <li>We select packaging sizes that fit the product snugly,
          minimizing the need for excess filler materials. </li>
      </ul>
      </div>
      <h3 className='head'>Suggestions</h3>
      <div className='suggestions'>
      <div className='sugg'>
      <a href='https://www.amazon.in/Kindle-eBooks/b?ie=UTF8&node=1634753031'>
      <img src={kindle}/>
      </a>
      <h5>Amazon Kindle</h5>
      
      </div>
      <div className='sugg'>
      <a href='https://play.google.com/store/books?hl=en_IN&gl=US'>
      <img src={gpb}/>
      </a>
      <h5>Google Play Books</h5>
      </div>

      <div className='sugg'>
      <a href='https://www.apple.com/in/apple-books/'>
      <img src={ab}/>
      </a>
      <h5>Apple Books</h5>
      </div>
      

      </div>
      

      
    </div>
  )
}

export default Sustainable;
