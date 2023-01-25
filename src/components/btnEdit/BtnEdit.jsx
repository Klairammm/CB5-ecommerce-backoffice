import styles from "./styleBtnEdit.module.scss";
import { TbEdit } from "react-icons/tb";
import ModalEdit from "../modalEdit/ModalEdit";
import { useState } from "react";

const BtnEdit = ({ data, getData }) => {
  //modale
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <ModalEdit getData={getData} data={data} setShowModal={setShowModal} />
      )}
      <button onClick={() => setShowModal(true)} className={styles.BtnEdit}>
        <TbEdit />
      </button>
    </>
  );
};

export default BtnEdit;
