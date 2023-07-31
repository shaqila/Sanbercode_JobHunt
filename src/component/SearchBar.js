import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { GoSearch } from "react-icons/go";

const SearchBar = ({ textColor }) => {
  const { handleFunction } = useContext(GlobalContext);
  const { handleSearch, handleChangeSearch, handleKeyPress } = handleFunction;

  return (
    <div
      className={`flex appearance-none border-2 rounded-lg p-1 left-2 sm:max-w-screen-sm ${textColor}`}
    >
      <input
        type="text"
        onChange={handleChangeSearch}
        onKeyPress={handleKeyPress}
        className="appearance-none bg-transparent border-none rounded-lg px-4 py-2 w-full"
        placeholder="Search job title or company..."
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center px-5"
      >
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
