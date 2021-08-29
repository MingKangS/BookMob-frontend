import { MenuProps } from "../interfaces/home";
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import { GiHamburgerMenu } from 'react-icons/Gi';

const Menu: React.FC<MenuProps> = ({ router, styles }) => {
  return ( 
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <MenuTwoToneIcon style={{ fontSize: 50 }}/>
        
      </button>
      <div className={styles.dropdownContent}>
        <a href="#">My List</a>
        <a href="#">Account</a>
        <a href="#">Log out</a>
      </div>
    </div>
   );
}
 
export default Menu;