import CategoryForm from "../categoryForm/CategoryForm";
import styles from "./styleModal.module.scss";

const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.content}>
        <button onClick={() => setShowModal(false)}>❌</button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Modal;
