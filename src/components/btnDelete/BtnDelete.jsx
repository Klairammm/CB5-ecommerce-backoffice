import styles from "./styleBtnDelete.module.scss";
import { TbTrash } from "react-icons/tb";

const BtnDelete = () => {
  return (
    <button className={styles.BtnDelete}>
      <TbTrash />
    </button>
  );
};

export default BtnDelete;
