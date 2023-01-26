import styles from "./styleBtnCounter.module.scss";
const BtnCounter = ({ counter, setCounter }) => {
  return (
    <button className={styles.BtnPlus} onClick={() => setCounter(counter + 1)}>
      Like +1
    </button>
  );
};

export default BtnCounter;
