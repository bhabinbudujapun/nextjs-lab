import { Book } from "@/types";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <>
      <h1>{book.title}</h1>
      <h1>{book.description}</h1>
      <h1>{book.coverImage}</h1>
    </>
  );
};

export default BookCard;
