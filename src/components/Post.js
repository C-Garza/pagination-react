import styles from "./Post.module.css";

const Post = ({post}) => {
  let randomColors = ["#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2196f3", "#3f51b5", "#673ab7"];
  let randomColor = Math.floor(Math.random() * randomColors.length);
  console.log(randomColor);

  return(
    <li className={styles.post}>
      <div className={styles.background} style={{backgroundColor: randomColors[randomColor]}}></div>
      <div className={styles.container}>
        <h2 className={styles.heading}>{post.title}</h2>
        <p className={styles.body}>By {post.user.name}</p>
      </div>
    </li>
  );
};

export default Post;