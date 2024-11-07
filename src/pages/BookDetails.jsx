import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ApiCartContext from "../contexts/ApiCartContext";
import { books } from "../data/BooksData"; 
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; 
import { toast } from 'react-toastify';


function BookDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { addToCart, cart } = useContext(ApiCartContext);

  const [book, setBook] = useState(null); 
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const bookId = parseInt(id); 
    const fetchedBook = books.find((book) => book.id === bookId);
    setBook(fetchedBook);

    // If the book is already in the cart, set the quantity to the existing one
    if (fetchedBook) {
      const cartItem = cart.find((item) => item.id === fetchedBook.id);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [id, cart]); 

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (book) {
      addToCart(book, quantity); 
      toast("Item added to cart successfully!", { autoClose: 3000 });
    }
  };

  if (!book) return <p>Book not found or loading...</p>;

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow-md">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center text-blue-500 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> 
          Back
        </button>
        
        <img
          src={book.image} 
          alt={book.title}
          className="w-50 h-72 object-cover rounded mb-6"
        />
        <h2 className="text-3xl font-semibold mb-2">{book.title}</h2>
        <p className="text-xl text-gray-600 mb-4">{book.author}</p>
        <p className="text-lg mb-4">{book.description}</p>
        <p className="text-xl font-semibold mb-4">${book.price}</p>
        
      
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={decrementQuantity}
            className="bg-gray-300 px-3 py-2 rounded"
          >
            -
          </button>
          <span>{quantity}</span> 
          <button
            onClick={incrementQuantity}
            className="bg-gray-300 px-3 py-2 rounded"
          >
            +
          </button>
        </div>

      
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
