import styles from "./styleHome.module.scss";
import "./style.css";
import { useState } from "react";
import BtnCounter from "../btnCounter/BtnCounter";

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.Home}>
      <h2>Home</h2>
      {/* <div className={styles.counter}>
        <p>Like: {counter}</p>
        <BtnCounter counter={counter} setCounter={setCounter} />
      </div> */}
      <div class="loop-wrapper">
        <div class="mountain"></div>
        <div class="hill"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="rock"></div>
        <div class="truck"></div>
        <div class="wheels"></div>
      </div>
    </div>
  );
};

export default Home;
