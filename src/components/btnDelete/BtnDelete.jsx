import styles from "./styleBtnDelete.module.scss";
import { TbTrash } from "react-icons/tb";
import { DELETE } from "../utils/http";

const BtnDelete = ({ id, getData }) => {
  const deleteElement = () => {
    DELETE("categories", "/" + id).then((data) => {
      console.log(data);
      getData();
    });
  };
  return (
    <button onClick={() => deleteElement()} className={styles.BtnDelete}>
      <TbTrash />
    </button>
  );
};

export default BtnDelete;
