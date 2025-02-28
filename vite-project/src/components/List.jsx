import classes from "./List.module.css";
import Post from "./Post";
import { useState } from "react";

function List() {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((exisitingPosts) => [postData, ...exisitingPosts]);
  }
  return (
    <>
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post name={post.name} body={post.body} />
        ))}
        <Post name={"Noureddine"} body={"I'm fine..."} />
      </ul>
    </>
  );
}

export default List;
