import { useRouter } from 'next/router';
import Menu from '../../components/Menu';
import navbarStyles from '../../styles/navbar.module.css';
import bookStyles from '../../styles/book.module.css';
import BookImgDisplay from '../../components/BookImgDisplay';
import { book, bookListApiRes, StaticPathsBook, BookProps } from "../../interfaces/home";
import { GetStaticPropsResult, GetStaticProps, GetStaticPaths, GetStaticPathsResult } from 'next';
import BookConditionStars from '../../components/bookConditionStars';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/api/list-books");
  const data: bookListApiRes = await res.json();
	console.log(data);
  const paths = data.book_list.map((b) => {
    return {
      params: { id: b.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps= async (context): Promise<GetStaticPropsResult<BookProps>> => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8000/api/get-book/" + id);
  const book: book = await res.json();

  return {
    props: { book: book }
  };
};
 
const Book: React.FunctionComponent<BookProps> = ({ book }) => {
	const router = useRouter();
	//console.log(book);
	
	return ( 
		<div className={bookStyles.container}>
			<div className={navbarStyles.navbar}>
				<h1 className={navbarStyles.appName}>BookMob</h1>
        <Menu router={router} styles={navbarStyles}/>
        
      </div>

			<div className={bookStyles.bookContainer}>
				<BookImgDisplay styles={bookStyles}/>
				<div className={bookStyles.flexRow}>
					<div className={bookStyles.bookDetailsContainer}>
						<label className={bookStyles.bookDetailsLabel}>Title:</label>
						<p className={bookStyles.bookDetail}>{book.title}</p>

						<label className={bookStyles.bookDetailsLabel}>Author:</label>
						<p className={bookStyles.bookDetail}>{book.author}</p>

						<label className={bookStyles.bookDetailsLabel}>Date posted:</label>
						<p className={bookStyles.bookDetail}>{book.date_posted}</p>

						<label className={bookStyles.bookDetailsLabel}>Condition:</label>
						<BookConditionStars condition={book.condition}/>
					</div>
					<div className={bookStyles.bookDetailsContainer}>

						<label className={bookStyles.bookDetailsLabel}>Description:</label>
						<p className={bookStyles.bookDescription}>{book.description}</p>

						<label className={bookStyles.bookDetailsLabel}>Seller:</label>
						<p className={bookStyles.bookDetail}>{book.seller_username}</p>

						<label className={bookStyles.bookDetailsLabel}>Price:</label>
						<p className={bookStyles.bookDetail}>RM {book.price}</p>

					</div>
				</div>
				
			</div>

			<div className="footer"></div>
		</div>
	 );
}
 
export default Book;



