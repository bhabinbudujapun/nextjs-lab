import React from "react";
import { Book } from "@/types";
import Image from "next/image";
import DownloadButton from "./components/DownloadButton";

async function SingleBookPage({ params }: { params: { bookId: string } }) {
  let book: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}api/books/${params.bookId}`
    );

    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    book = await response.json();
  } catch (error: unknown) {
    console.error("Fetch failed:", error);
    throw new Error("Error fetching book");
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left section: Text content */}
          <div className="md:col-span-2 space-y-6 text-primary-900">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              {book.title}
            </h2>
            {/* <p className="text-lg text-primary-700">by {book.author.name}</p> */}
            <p className="text-base sm:text-lg leading-relaxed text-primary-800">
              {book.description}
            </p>
            <DownloadButton fileLink={book.file}/>
          </div>

          {/* Right section: Book cover */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={book.coverImage}
              alt={book.title}
              className="rounded-lg shadow-md border max-h-[300px] w-auto h-auto object-contain"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBookPage;
