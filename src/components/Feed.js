import {useState, useEffect} from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const url = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    fetchPosts(`${url}/posts?_start=${offset}&_limit=${limit}`);
  }, []);

  const fetchPosts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
      return data;
    }
    catch(err) {
      return err;
    }
  };
  console.log(posts);

  return(
    <div>HI</div>
  );
};

export default Feed;