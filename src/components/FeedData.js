import styles from "./FeedData.module.css";

const FeedData = ({limit, offset, setOffset, limitOptions, total, setLimit}) => {
  const renderOptions = () => {
    return limitOptions.map(option => {
      return <option key={option} value={option}>{option}</option>
    });
  };

  return(
    <div className={styles.container}>
      <div className={styles.results__container}>
        <p>Showing {offset + limit} of {total}</p>
      </div>
      <div className={styles.input__container}>
        <select 
          value={limit} 
          onChange={(e) => {
              setLimit(parseInt(e.target.value, 10));
              setOffset(0);
            }
          }
          className={styles.input__select}
        >
          {renderOptions()}
        </select>
      </div>
    </div>
  );
};

export default FeedData;