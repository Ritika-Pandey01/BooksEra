const express=require("express");
const router=express.Router();
const cloudinary=require("../utils/cloudinary");
const { Book } = require("../models/book");
const {isAdmin}=require("../middleware/auth"); 

//Create a product
router.post("/",isAdmin,async(req,res)=>{
    const {title,author,genre,price,image}=req.body; 
    try{
        //if image is given we do this
        if(image){
            const uploadResponse=await cloudinary.uploader.upload(image,{
                upload_preset:"booksera",
            });
            if(uploadResponse){
                const book=new Book({
                    title,
                    author,
                    genre,
                    price,
                    image:uploadResponse,
                });
                
                const savedBook=await book.save();
                res.status(200).send(savedBook);
            }
        }
    }catch(error){
        console.error();
        res.status(500).send(error);
    }
})

//To get the products from the db
router.get("/",async(req,res)=>{
    try{
    const book=await Book.find();
    res.status(200).send(book);
    }catch(error){
        console.log(error); 
        res.status(500).send(error);
    }
    
})
module.exports=router;