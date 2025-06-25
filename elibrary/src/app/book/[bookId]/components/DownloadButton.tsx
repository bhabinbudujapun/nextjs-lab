"use client";
import React from "react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };
  return (
    <button
      onClick={handleDownload}
      className="mt-10 inline-flex items-center justify-center gap-2 rounded-md border border-primary-500 bg-primary-500 px-6 py-2.5 text-sm font-semibold text-orange-500 shadow-sm transition-colors hover:bg-primary-600 active:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer">
      Download the Book
    </button>
  );
};

export default DownloadButton;
