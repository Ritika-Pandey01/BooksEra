import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Bestseller = () => {
    const [books,setBook]=useState([]);
    useEffect(()=>{
        const fetchBest=async()=>{
            const res=await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.BOOKS_API}`);
            setBook(res.data.results.books);
            console.log(res.data.results.books);
        }
    },[])
  return (
    <div>
      <h1>BestSellers</h1>
      <div className="books">
            {books.map((book) => {
              const {rank,title,author,description}=book
            })}
          </div>
    </div>
  )
}

export default Bestseller;
