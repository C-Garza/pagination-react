import {useState, useEffect} from "react";
import Posts from "./Posts";
import styles from "./Feed.module.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const url = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    // fetchPosts(`${url}/posts?_start=${offset}&_limit=${limit}&_expand=user`); EZ way =P
    fetchPosts(url);
  }, []);

  const fetchPosts = async (url) => {
    try {
      const response = await fetch(`${url}/posts?_start=${offset}&_limit=${limit}`);
      let data = await response.json();
      let userIds = [...new Set(data.map((post) => post.userId))];
      userIds = userIds.map(id => fetch(`${url}/users/${id}`).then(res => res.json()));
      const users = await Promise.all(userIds);
      const userData = users;
      let usersObj = {};
      for(let user of userData) {
        usersObj[user.id] = {...user};
      }
      data = data.map(post => {
        return {
          ...post, 
          user: {
            ...usersObj[post.userId]
          }
        };
      });
      console.log(data);
      setPosts(data);
      return data;
    }
    catch(err) {
      console.log(err);
      return err;
    }
  };
  console.log(posts);

  return(
    <div className={styles.container}>
      <Posts posts={posts} />
    </div>
  );
};

export default Feed;