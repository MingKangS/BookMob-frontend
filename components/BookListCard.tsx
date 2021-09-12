import Link from "next/link";
import DeleteIcon from '@material-ui/icons/Delete';
import { BookCardProps } from "../interfaces/home";
 
const BookListCard: React.FC<BookCardProps> = ({ styles, book}) => {
	return ( 
		<Link href={"/book/" + book.id}>
			<div>
				<img 
					className={styles.image} 
					src="https://cdn.shopify.com/s/files/1/0511/7575/1837/files/SELF_HELP_e85aa831-a7bb-4109-ac24-3b970aa1bc82_450x.jpg?v=1627866670"
				/>
				<div>
					<h2>{book.title}</h2>
					<h3>{book.author}</h3>
					<p>{book.price}</p>
				</div>
				<div>
					<DeleteIcon/>
				</div>
			</div>
		</Link>
	 );
}
 
export default BookListCard;