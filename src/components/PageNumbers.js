import styles from "./PageNumbers.module.css";

const PageNumbers = ({pages, currentPage, handlePageClick}) => {
  const renderNumbers = () => {
    return Array.from({length: pages}, (_, i) => i + 1).map((num, i) => {
      i = i + 1;
      return (
      <button 
        className={`${styles.button} ${i === currentPage ? styles["button--active"] : ""}`} 
        type="button"
        key={num}
        onClick={handlePageClick}
      >
        {num}
      </button>
      );
    });
  };

  return(
    <div className={styles.container}>
      {renderNumbers()}
    </div>
  );
};

export default PageNumbers;