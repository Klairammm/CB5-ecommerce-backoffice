import styles from "./styleNavbar.module.scss";
import { navbarLinks } from "../constants/navbar";
import LiComponents from "../liComponents/LiComponents";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      {navbarLinks.map((item, index) => (
        <LiComponents icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
};

export default Navbar;
