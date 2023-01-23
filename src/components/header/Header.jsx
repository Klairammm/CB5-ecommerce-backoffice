import styles from "./styleHeader.module.scss";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.columnSx}>
        <h2>E-Commerce Dashboard</h2>
        <img src={logo} className={styles.logoHeader} alt="logo" />
      </div>
      <button className={styles.btnSet}>Hello!</button>
    </div>
  );
};

export default Header;
