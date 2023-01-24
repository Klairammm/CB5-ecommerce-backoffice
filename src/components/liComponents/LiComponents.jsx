import styles from "./stylesLiComponents.module.scss";

const LiComponents = ({ label, icon, setRoute, routeUrl }) => {
  return (
    <li onClick={() => setRoute(routeUrl)} className={styles.LiComponents}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiComponents;
