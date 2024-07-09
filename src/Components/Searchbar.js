import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-red p-2 w-96 outline-none rounded-md pr-8"
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch();
          }}
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-2 bg-red text-white p-1 rounded-md alig"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-1 1l.27.28v.79l4.25 4.25c.5.5 1.3.5 1.8 0s.5-1.3 0-1.8l-4.25-4.25v-.79l-.29-.28zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
