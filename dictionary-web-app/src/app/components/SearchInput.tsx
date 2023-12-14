import Image from "next/image";
import searchIcon from "../../../public/images/icon-search.svg"
import { useState, useEffect } from "react";
interface searchInputProps {
  search: (message: string) => void;
}



function SearchInput({ search }:searchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
      <form className="w-full my-5 " onSubmit={(evt) => {
          evt.preventDefault();
          search(searchTerm);
    }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(evt) => {
          setSearchTerm(evt.target.value);

        }}
        name="searchTerm"
        id="searchTerm"
        placeholder="keyboard"
        className="w-full bg-[#F4F4F4] dark:bg-[#1F1F1F] dark:text-[#FFF] rounded-[16px] border-none p-[1rem] focus:outline-none focus:ring-purple-400 caret-purple-700"
          />

          
        
         
    </form>
  );
}

export default SearchInput
