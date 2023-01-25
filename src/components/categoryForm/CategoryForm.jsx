import styles from "./styleCategoryForm.module.scss";
import { useEffect, useState } from "react";
import { POST, PUT } from "../utils/http";

const CategoryForm = ({ setShowModal, getData, data }) => {
  //settiamo uno stato con i campi del nostro form
  //inizializzandolo con "" vuote
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
  }, []);

  //il param diventa la chiave. input è la stringa inserita come param in handleForm("img")--> img quindi
  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = (e) => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then((data) => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form>
      <input
        type="text"
        value={form.name}
        onChange={(e) => handleForm("name", e)}
      />
      <input
        type="text"
        value={form.image}
        onChange={(e) => handleForm("image", e)}
      />
      {edit ? (
        <button type="submit" onClick={(e) => editForm(e)}>
          Edit
        </button>
      ) : (
        <button type="submit" onClick={(e) => submitForm(e)}>
          Send
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
