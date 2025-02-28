import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  function nameChangeHandler(e) {
    setName(e.target.value);
  }
  function bodyChangeHandler(e) {
    setBody(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      body: body,
      name: name,
    };
    onAddPost(postData);
    onCancelSubmition();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={nameChangeHandler} />
        </p>
        <p>
          <Link to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
