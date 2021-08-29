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

export const getStaticProps = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch("http://localhost:8000/api/list-books", requestOptions);
  const data: book[] = await res.json();
  console.log(data)
  return {
    props: { books: data }
  }

}
 
const Home: React.FC<HomeProps> = ({ books }) => {
  const [user, setUser] = useState<String | boolean>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortByAttribute, setSortByAttribute] = useState<string>("Title");
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
    setBookList([...bookList].sort((x,y) => {return x[sortByAttribute] > y[sortByAttribute] ? 1 : -1})) 
  }, [sortByAttribute]);

  return ( 
    <div>
      <div className={navbarStyles.navbar}>
        <SearchBar styles={navbarStyles} setSearchValue={setSearchValue}/>
        <Menu router={router} styles={navbarStyles}/>
        
      </div>
      <div className={styles.sortByDiv}> 
        <label>Sort by:</label>
        <select name="sort-by-attribute" id="sort-by-attribute" onChange={(e) => setSortByAttribute(e.target.value)}>
          <option value="title">Title</option>
          <option value="seller_username">Seller</option>
          <option value="author">Author</option>
          <option value="price">Price</option>
        </select>
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