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

export const getStaticProps = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch("http://localhost:8000/api/list-books", requestOptions);
  const data: book[] = await res.json();
  return {
    props: { books: data }
  }

}
 
const Home: React.FC<HomeProps> = ({ books }) => {
  const [user, setUser] = useState<String | boolean>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterAttribute, setFilterAttribute] = useState<string>();

  const router = useRouter();

  // useEffect(() => {
  //   const getUser = async () => {
  //     checkAuthAndGetUser().then((user) => {
  //       setUser(user);
  //     })
  //   };
  //   getUser();
  // }, []);

  return ( 
    <div>
      <div className={navbarStyles.navbar}>
        <SearchBar styles={navbarStyles} setSearchValue={setSearchValue}/>
        <Menu router={router} styles={navbarStyles}/>
      </div>
    </div>
   );
}
 
export default Home;