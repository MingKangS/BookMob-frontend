import React, { useState, useEffect } from 'react';
import { HomeProps } from "../../interfaces/home";
import { book, bookListApiRes } from "../../interfaces/home";
import { checkAuthAndGetUser } from '../../utils/utils';
import { useRouter } from 'next/router';
import { setupMaster } from 'cluster';
import SearchBar from '../../components/SearchBar';
import Menu from '../../components/Menu';
import navbarStyles from '../../styles/navbar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { StaticPropsBook } from '../../interfaces/home';
import { GetStaticPropsResult, GetStaticProps } from 'next';
import BookListCard from '../../components/BookListCard';
import myListStyles from '../../styles/myList.module.css';

// export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<MyListProps>> => {
//   const token: String = localStorage.getItem('jwt');
// 	const res = await fetch("http://localhost:8000/api/get-seller-book-list/" + token);
//   const data: bookListApiRes = await res.json();
//   console.log("List of books:", data);
//   return {
//     props: { books: data }
//   };
// };

interface MyListProps {

}
 
const MyList: React.FC<MyListProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
	const [bookList, setBookList] = useState<book[]>([]);
	const router = useRouter();

	useEffect(() => {
		const getSellerbookList = async () => {
			const token: String = localStorage.getItem('jwt');
			const res = await fetch("http://localhost:8000/api/get-seller-book-list/" + token);
			const data: bookListApiRes = await res.json();
			console.log(data);
			setBookList(data.book_list);
		};
		getSellerbookList();
		
	}, []);

	console.log(bookList);

	return ( 
		<div className="">
      <div className={navbarStyles.navbar}>
        <SearchBar styles={navbarStyles} setSearchValue={setSearchValue}/>
        <Menu router={router} styles={navbarStyles}/>
        
      </div>
			
      <div>
				{bookList.map((book, index) => (
					<BookListCard book={book} styles={myListStyles}/>
				))}
			</div>

			<div className="footer"></div>
    </div>
	 );
}
 
export default MyList;