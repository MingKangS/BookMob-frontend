import { MenuProps } from "../interfaces/home";
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import { GiHamburgerMenu } from 'react-icons/Gi';
import Link from "next/link";

const Menu: React.FC<MenuProps> = ({ router, styles }) => {
	const logOut = () => {
		const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      }),
    };

    fetch("http://localhost:8000/api/log-out", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          localStorage.removeItem('jwt');
					console.log("You have sucessfully logged out");

          router.push('/log-in');
        }
      });
	}

  return ( 
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <MenuTwoToneIcon style={{ fontSize: 50 }}/>
        
      </button>
      <div className={styles.dropdownContent}>
			<Link href="/my-list"><a href="#">My List</a></Link>
        <a href="#">Account</a>
        <a href="#" onClick={() => logOut()}>Log out</a>
      </div>
    </div>
   );
}
 
export default Menu;