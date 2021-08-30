import { BookCardProps } from "../interfaces/home";
import Link from "next/link";

const BookCard: React.FC<BookCardProps> = ({ styles, book }) => {
  return ( 
    <Link href="/book">
      <div className={styles.bookCard}>
        <p className={styles.seller}>{ book.seller_username }</p>
        <div>
          <img 
            className={styles.image} 
            src="https://bookmob.s3-ap-southeast-1.amazonaws.com/Book images/iJjQo6rCi4EBktzGTSEMHn.png"
          />
        </div>
        
        <h3 className={styles.title}> { book.title } </h3>
        <p className={styles.author}> { book.author } </p>
        <div className={styles.priceDiv}>
          <h5 className={styles.price}> RM { book.price } </h5>
        </div>
        
      </div>
    </Link>
    
   );
}
 
export default BookCard;