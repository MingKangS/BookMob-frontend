import { SearchBarProps } from "../interfaces/home";
import React, { useState, useEffect } from 'react';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
 
const SearchBar: React.FC<SearchBarProps> = ({styles, setSearchValue}) => {
  const [input, setInput] = useState<string>("")

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(input);
  }

  return ( 
    <form autoComplete="off" className={styles.searchBar} onSubmit={(e) => {handleFormSubmit(e)}}>
      <input 
        className={styles.searchInput}
        type="text" 
        name="search" 
        placeholder="Search by title or seller"
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchTwoToneIcon 
        className={styles.searchButton} 
        style={{ fontSize: 48 }}
        onClick={() => {setSearchValue(input);}}
        />
    </form>
   );
}
 
export default SearchBar;