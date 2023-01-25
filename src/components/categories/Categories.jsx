import styles from "./styleCategories.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import Table from "../table/Table";
import Modal from "../modal/Modal";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);

  const categoriesStateInit = {
    categories: [], //array da popolare
    loading: true,
  };

  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    // GET("categories").then((data) => console.log(data));
    GET("categories").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Categories}>
      <div className={styles.pageHeader}>
        {showModal && <Modal showModal={setShowModal} />}
        <h1>Categories</h1>
        <button onClick={() => setShowModal(true)}>Add New Category ✏️</button>
      </div>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Categories;
