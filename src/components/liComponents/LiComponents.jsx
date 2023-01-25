import styles from "./stylesLiComponents.module.scss";

const LiComponents = ({ label, icon, setRoute, routeUrl, stateRoute }) => {
  return (
    <li
      onClick={() => setRoute(routeUrl)}
      className={`${styles.LiComponents} ${
        stateRoute === routeUrl ? styles.active : ""
      }`}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiComponents;
