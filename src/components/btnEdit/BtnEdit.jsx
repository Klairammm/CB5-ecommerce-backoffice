import styles from "./styleBtnEdit.module.scss";
import { TbEdit } from "react-icons/tb";

const BtnEdit = ({ metodo }) => {
  return (
    <button onClick={() => metodo()} className={styles.BtnEdit}>
      <TbEdit />
    </button>
  );
};

export default BtnEdit;
