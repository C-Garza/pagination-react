import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = ({posts}) => {
  const renderPosts = () => {
    return posts.map(post => {
      return <Post key={post.id} post={post} />
    });
  };

  return(
    <div className={styles.container}>
      <ul className={styles.list}>
        {renderPosts()}
      </ul>
    </div>
  );
};

export default Posts;