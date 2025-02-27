import classes from './Post.module.css'
function Post({name, body}){
    return <div className={classes.post}>
        <h1 className={classes.author}>{name}</h1>
        <p className={classes.text}>{body}</p>
    </div>
}

export default Post;