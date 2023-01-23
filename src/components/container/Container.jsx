import styles from "./styleContainer.module.scss";
import Navbar from "../navbar/Navbar";

const Container = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.columnSx}>
        <Navbar />
      </div>
      <div className={styles.columnDx}></div>
    </div>
  );
};

export default Container;
