import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { useDispatch } from "react-redux";
import { booksCreate } from "../../features/booksSlice";

function CreateProducts() {
  const dispatch = useDispatch();
  
    const [bookImg,setBookImg]=useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");

    console.log(bookImg);
    const handleBookImageUpload=(e)=>{
    const file = e.target.files[0];

    TransformFileData(file);
    }

    const TransformFileData = (file) => {
        const reader = new FileReader();
    
        if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            setBookImg(reader.result);
          };
        } else {
          setBookImg("");
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(
          booksCreate({
            title,
            author,
            genre,
            price,
            image: bookImg,
          })
        );
      };
    

    return ( <>
        <StyledCreateProduct>
        <StyledForm onSubmit={handleSubmit}>
        <h3>Add Books</h3>
        <input
          accept="image/"
          type="file"
          onChange={handleBookImageUpload}
          required
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <PrimaryButton type="submit">Submit</PrimaryButton>
        </StyledForm>
        <ImagePreview>
        {bookImg ? (
          <>
            <img src={bookImg} alt="bookImg" />
          </>
        ) : (
          <p>Book image upload preview</p>
        )}
        </ImagePreview>
        </StyledCreateProduct>
    </> );
}

export default CreateProducts;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
