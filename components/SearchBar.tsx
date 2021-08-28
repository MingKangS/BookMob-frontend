import { SearchBarProps } from "../interfaces/home";
import React, { useState, useEffect } from 'react';
 
const SearchBar: React.FC<SearchBarProps> = ({styles, setSearchValue}) => {
  const [input, setInput] = useState<string>("")

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(input);
  }

  return ( 
    <form className={styles.searchBar} onSubmit={(e) => {handleFormSubmit(e)}}>
      <input 
        className=""
        type="text" 
        name="search" 
        placeholder="Search by title or seller"
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="Submit"/>
    </form>
   );
}
 
export default SearchBar;