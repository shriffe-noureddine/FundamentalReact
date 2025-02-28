import classes from "./List.module.css";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import { useState } from "react";

function List({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((exisitingPosts) => [postData, ...exisitingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAddPost={addPostHandler}
            onCancelSubmition={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post name={post.name} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default List;
