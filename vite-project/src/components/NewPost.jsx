import classes from './NewPost.module.css';

function NewPost({onNameChange, onBodyChange}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange}/>
      </p>
    </form>
  );
}

export default NewPost;