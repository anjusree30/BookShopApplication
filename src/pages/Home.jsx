

import React from "react";
import { Link } from "react-router-dom";
import { books } from "../data/BooksData"; // Importing book data

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Available Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow-md">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-gray-800 mt-2">${book.price}</p>
            <Link
              to={`/book/${book.id}`} // Link to the book details page
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
