import * as React from 'react';
import { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


interface BookImgDisplayProps {
	styles: {readonly [key: string]: string;},
}

const img1 = "https://cdn.shopify.com/s/files/1/0511/7575/1837/files/SELF_HELP_e85aa831-a7bb-4109-ac24-3b970aa1bc82_450x.jpg?v=1627866670";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslv3lzJ6p-jtKwmD6K4w82GdCf5Lj9nxB8Q&usqp=CAU";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdActH06y58UxCkM_JUScrnC1qljZEU6vSkg&usqp=CAU";
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2E7EEvLfn5BXdBZzQzhJxuCbbbXHFBA6tqQ&usqp=CAU";
 
const BookImgDisplay: React.FunctionComponent<BookImgDisplayProps> = ({styles}) => {
	const [selectedImgIdx, setSelectedImgIdx] = useState<number>(0);
	const [imgDisplayWindowIdx, setImgDisplayWindowIdx] = useState<number>(0);

	const imgSrcArray = [img1,img2,img3,img4]
	console.log(imgDisplayWindowIdx);
	return ( 
		<div className={styles.imgDisplayContainer} >
			<img 
				className={styles.displayedImg} 
				src={imgSrcArray[selectedImgIdx]}
			/>
			<div className={styles.window} >
				{imgSrcArray.slice(imgDisplayWindowIdx,imgDisplayWindowIdx+3).map((imgLink, idx) => (
						<img 
							className={selectedImgIdx == idx+imgDisplayWindowIdx ? styles.windowImg + " " + styles.selectedImg : styles.windowImg} 
							src={imgLink}
							onClick={() => setSelectedImgIdx(idx+imgDisplayWindowIdx)}
						/>
					))}
				{
					imgDisplayWindowIdx != 0 &&
					<div 
						className={styles.navIconDiv + " " + styles.navIconDivPrev}  
						onClick={() => setImgDisplayWindowIdx(imgDisplayWindowIdx-1)}
					>
						<NavigateBeforeIcon className={styles.navIcon} fontSize={"large"}/>
					</div>
				}
				{
					imgDisplayWindowIdx < imgSrcArray.length-3 &&
					<div 
						className={styles.navIconDiv + " " + styles.navIconDivNext} 
						onClick={() => setImgDisplayWindowIdx(imgDisplayWindowIdx+1)}
					>
						<NavigateNextIcon className={styles.navIcon} fontSize={"large"}/>
					</div>
				}
			</div>
			
			
		</div>
	 );
}
 
export default BookImgDisplay;