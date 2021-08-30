import React, { useState, useEffect } from 'react';
import { HomeProps } from "../interfaces/home";
import { book } from "../interfaces/home";
import { checkAuthAndGetUser } from '../utils/utils';
import { useRouter } from 'next/router';
import { setupMaster } from 'cluster';
import SearchBar from '../components/SearchBar';
import styles from '../styles/home.module.css';
import Menu from '../components/Menu';
import navbarStyles from '../styles/navbar.module.css';
import ImageUploader from '../components/ImageUploader';
import BookCard from '../components/BookCard';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/api/list-books");
  const data: book[] = await res.json();
  console.log(data)
  return {
    props: { books: data }
  };
}
 
const Home: React.FC<HomeProps> = ({ books }) => {
  const [user, setUser] = useState<String | boolean>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortAttribute, setSortAttribute] = useState<string>("Title");
  const [bookList, setBookList] = useState<book[]>(books.book_list);

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      checkAuthAndGetUser().then((user) => {
        setUser(user);
      })
    };
    getUser();
    console.log(books);
  }, []);

  useEffect(() => {
    setBookList(sortByAttribute([...bookList]));
  }, [sortAttribute]);

  useEffect(() => {
    const newBookList = [...books.book_list].filter((book) => {
      return book.title.toLowerCase().includes(searchValue.toLowerCase()) || 
        book.seller_username.toLowerCase().includes(searchValue.toLowerCase())
    });
    setBookList(sortByAttribute([...newBookList]));
  }, [searchValue]);

  const sortByAttribute = (a: book[]): book[] => {
    return a.sort((x,y) => {
      return x[sortAttribute] > y[sortAttribute] ? 1 : -1;
    });
  }

  const handleSelect = (event) => {
    setSortAttribute(event.target.value);
  };

  return ( 
    <div className={styles.homeContainer}>
      <div className={navbarStyles.navbar}>
        <SearchBar styles={navbarStyles} setSearchValue={setSearchValue}/>
        <Menu router={router} styles={navbarStyles}/>
        
      </div>
      <div className={styles.sortByDiv}> 
        
        <FormControl variant="outlined" className={styles.formControl}>
          <label id="select-label" className={styles.selectorLabel}>Sort by:</label>
          <Select
            defaultValue="title"
            labelId="select-label"
            name="sort-by-attribute" 
            id="sort-by-attribute"
            value={sortAttribute}
            onChange={handleSelect}
            label="Age"
            className={styles.sortBySelector}
            variant="filled"
            displayEmpty={false}
          >
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="seller_username">Seller</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div className={styles.bookCardContainer}>
      {bookList.map((book, index) => (
          <BookCard book={book} styles={styles}/>
        ))}
      </div>
    </div>
   );
}
 
export default Home;