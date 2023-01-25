import styles from "./styleNavbar.module.scss";
import { navbarLinks } from "../constants/navbar";
import LiComponents from "../liComponents/LiComponents";

const Navbar = ({ setRoute, stateRoute }) => {
  return (
    <ul className={styles.Navbar}>
      {navbarLinks.map((item, index) => (
        <LiComponents
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon}
          key={item.id}
          label={item.label}
          stateRoute={stateRoute}
        />
      ))}
    </ul>
  );
};

export default Navbar;
