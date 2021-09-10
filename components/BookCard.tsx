import { BookCardProps } from "../interfaces/home";
import Link from "next/link";

const BookCard: React.FC<BookCardProps> = ({ styles, book }) => {
  return ( 
    <Link href={"/book/" + book.id.toString()}>
      <div className={styles.bookCard}>
        <p className={styles.seller}>{ book.seller_username }</p>
        <div>
          <img 
            className={styles.image} 
            src="https://cdn.shopify.com/s/files/1/0511/7575/1837/files/SELF_HELP_e85aa831-a7bb-4109-ac24-3b970aa1bc82_450x.jpg?v=1627866670"
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