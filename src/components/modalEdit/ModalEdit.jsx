import styles from "./styleModalEdit.module.scss";

import CategoryForm from "../categoryForm/CategoryForm";

const ModalEdit = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.ModalEdit}>
      <div className={styles.modal}>
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

export default ModalEdit;
