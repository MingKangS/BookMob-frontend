import { BookCardProps } from "../interfaces/home";

const BookCard: React.FC<BookCardProps> = ({ styles, book }) => {
  return ( 
    <div className={styles.bookCard}>
      <p>{ book.seller_username }</p>
      <img src="https://bookmob.s3-ap-southeast-1.amazonaws.com/Book images/iJjQo6rCi4EBktzGTSEMHn.png" />
      <h4> { book.title } </h4>
      <p> { book.author } </p>
      <h5> { book.price } </h5>
    </div>
   );
}
 
export default BookCard;