import { useState } from "react";
import styles from "./styleContainer.module.scss";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Categories from "../categories/Categories";

const Container = () => {
  //state per visualizzare componenti diversi in base a cosa clicchiamo
  const [route, setRoute] = useState("home");

  return (
    <div className={styles.Container}>
      <div className={styles.columnSx}>
        <Navbar setRoute={setRoute} />
      </div>
      <div className={styles.columnDx}>
        {route === "home" && <Home />}
        {route === "categories" && <Categories />}
        {route === "products" && <div>Products</div>}
        {route === "users" && <div>Users</div>}
        {route === "orders" && <div>Orders</div>}
      </div>
    </div>
  );
};

export default Container;
