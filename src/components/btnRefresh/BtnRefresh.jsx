import styles from "./styleBtnRefresh.module.scss";
import { TbRefresh } from "react-icons/tb";

const BtnRefresh = ({ getData }) => {
  return (
    <button className={styles.BtnRefresh} onClick={() => getData()}>
      <TbRefresh />
    </button>
  );
};

export default BtnRefresh;
