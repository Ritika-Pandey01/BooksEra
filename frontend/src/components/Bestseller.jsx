import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Bestseller = () => {
    const [books,setBook]=useState([]);
    useEffect(()=>{
        const fetchBest=async()=>{
            const res=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ANjvL37R7r52GQXew3rvP4zLFKGtkzc6`);
            setBook(res.data.results.books);
            console.log(res.data.results.books);
        }
        fetchBest()
    },[])
  return (
    <div>
      <h1 className='bestList'>BestSellers</h1>
      <div className="books">
            {books.map((book) => {
              const {rank,title,author,book_image,description,amazon_product_url}=book
              return (
                <article key={rank} className='bestseller'>
                  <div>
                    <img src={book_image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='details'>
                  <span className="author"><b>Author:</b> {author}</span>
                  <br/>
                  <span className="desc"><b>Description:</b> {description}</span>
                  <span className="link"> <a href={amazon_product_url}><b>Link</b></a> </span>
                  </div>
                </article>
              )
            })}
          </div>
    </div>
  )
}

export default Bestseller;
