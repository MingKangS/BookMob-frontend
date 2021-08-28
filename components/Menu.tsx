import { MenuProps } from "../interfaces/home";

const Menu: React.FC<MenuProps> = ({ router, styles }) => {
  return ( 
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Dropdown
        <i className={styles.fa + styles.faCaretDown}></i>
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