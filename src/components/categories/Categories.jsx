import styles from "./styleCategories.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import Table from "../table/Table";

const Categories = () => {
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
      <h1>Categories</h1>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
      />
    </div>
  );
};

export default Categories;
