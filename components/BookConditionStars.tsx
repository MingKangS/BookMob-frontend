import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { green } from '@material-ui/core/colors';

interface BookConditionStarsProps {
	condition: number
}
 
const BookConditionStars: React.FC<BookConditionStarsProps> = ({ condition }) => {
	const starIconStyles = {
		color: "#ffee00",
		fontSize: 35
	}
	return (
		<div>
			{Array.from(Array(5).keys()).map((n, idx) => (
          <>{ n+1 <= condition ? <StarIcon style={starIconStyles}/> : <StarBorderIcon style={starIconStyles}/>}</>
        ))}
		</div>
	 );
}
 
export default BookConditionStars;