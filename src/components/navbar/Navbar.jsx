import styles from "./styleNavbar.module.scss";
import { navbarLinks } from "../constants/navbar";
import LiComponents from "../liComponents/LiComponents";

const Navbar = ({ setRoute }) => {
  return (
    <ul className={styles.Navbar}>
      {navbarLinks.map((item, index) => (
        <LiComponents
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon}
          key={item.id}
          label={item.label}
        />
      ))}
    </ul>
  );
};

export default Navbar;
