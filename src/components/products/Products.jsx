import { useEffect, useState } from "react";
import { DELETE, GET } from "../utils/http";
import LiProduct from "../liProducts/LiProducts";
import styles from "./styleProducts.module.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = (id) => {
    DELETE("products", id).then((data) => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.Products}>
      <h1>Products</h1>
      <ul className={styles.list}>
        {products.map((item, index) => (
          <LiProduct
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
