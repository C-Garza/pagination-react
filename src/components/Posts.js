const Posts = ({posts}) => {
  const renderPosts = () => {
    return posts.map(post => {
      return <li key={post.id}>{post.title}</li>
    });
  };

  return(
    <div>
      <ul>
        {renderPosts()}
      </ul>
    </div>
  );
};

export default Posts;