import {useState, useEffect} from "react";
import Posts from "./Posts";
import styles from "./Feed.module.css";
import PageNumbers from "./PageNumbers";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const url = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    // fetchPosts(`${url}/posts?_start=${offset}&_limit=${limit}&_expand=user`); EZ way =P
    fetchPosts(url);
  }, [offset, limit]);

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
      setTotalPosts(parseInt(response.headers.get("x-total-count"), 10));
      return data;
    }
    catch(err) {
      console.log(err);
      return err;
    }
  };
  const calculatePages = () => {
    return Math.floor(totalPosts / limit);
  };
  const currentPage = () => {
    return Math.floor((offset + limit) / limit);
  };
  const handlePageClick = (e) => {
    window.scrollTo({top: 0, behavior: "smooth"});
    setOffset((e.target.innerText * limit) - limit);
  };

  console.log(posts);

  return(
    <div className={styles.container}>
      <Posts posts={posts} />
      <PageNumbers pages={calculatePages()} currentPage={currentPage()} handlePageClick={handlePageClick} />
    </div>
  );
};

export default Feed;