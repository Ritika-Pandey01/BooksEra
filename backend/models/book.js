const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    title:{type:String, required:true}, 
    author:{type:String, required:true}, 
    genre:{type:String, required:true}, 
    price:{type:Number, required:true},     
    image:{type:Object, required:true}, 

},{
    timestamps:true
})

const Book=mongoose.model("Book",bookSchema);
exports.Book=Book;