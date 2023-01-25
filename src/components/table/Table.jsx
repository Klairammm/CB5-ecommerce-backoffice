import styles from "./styleTable.module.scss";
import BtnRefresh from "../btnRefresh/BtnRefresh";
import BtnEdit from "../btnEdit/BtnEdit";
import BtnDelete from "../btnDelete/BtnDelete";

const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.Table}>
      <div className={styles.tableHead}>
        <div className={styles.description}>
          <p>ID</p>
          <p>IMG</p>
          <p>Name</p>
        </div>
        <BtnRefresh getData={getData} />
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map((item) => (
            <div className={styles.tableRow} key={item.id}>
              <p>{item.id}</p>
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name.substring(0, 20)}</p>
              <div className={styles.btnSet}>
                <BtnEdit
                  getData={getData}
                  data={{ name: item.name, image: item.image, id: item.id }}
                />
                <BtnDelete getData={getData} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
