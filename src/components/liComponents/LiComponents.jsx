import styles from "./stylesLiComponents.module.scss";

const LiComponents = ({ label, icon }) => {
  return (
    <li className={styles.LiComponents}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiComponents;
