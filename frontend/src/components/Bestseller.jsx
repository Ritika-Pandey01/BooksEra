import React,{useState,useEffect} from 'react';
import axios from 'axios';
import image from '../images/nytbest.png';
const Bestseller = () => {
    const [books,setBook]=useState([]);
    useEffect(()=>{
        const fetchBest=async()=>{
            const res=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOK_API}`);
            setBook(res.data.results.books);
        }
        fetchBest()
    },[])
  return (
    <div className='bestSeller'>
    <img className='nyt' src={image}/>
     
      <div className="books">
            {books.map((book) => {
              const {rank,title,author,book_image,description,amazon_product_url}=book
              return (
                <article key={rank} className='bestseller'>
                <h3>{title}</h3>
                  <div>
                    <img src={book_image} alt={title}/>
                  </div>
                  <div className='details'>
                  <span className="author"><b>Rank:</b> {rank}</span>
                  <span className="author"><b>Author:</b> {author}</span>
                  <span className="desc"><b>Description:</b> {description}</span>
                  <span className="link"> <a href={amazon_product_url}><b>Amazon Link</b></a> </span>
                  </div>
                </article>
              )
            })}
          </div>
    </div>
  )
}

export default Bestseller;
