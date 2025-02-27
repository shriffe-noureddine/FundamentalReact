import classes from './List.module.css'
import NewPost from './NewPost'
import Post from './Post'
import Modal from './Modal'
import { useState } from 'react';
function List({isPosting, onStopPosting}){

    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    function nameChangeHandler(e){
        setName(e.target.value);
    }
    function bodyChangeHandler(e){
        setBody(e.target.value);
    }

    let modalContent;
    if (isPosting) {
        modalContent = <Modal onClose={onStopPosting}>
        <NewPost onNameChange={nameChangeHandler} onBodyChange={bodyChangeHandler}/>
    </Modal>
    }

    return <>
        {modalContent}
        <ul className={classes.posts}>
        <Post name={name} body={body}/>
        <Post name='Noureddine' body='React'/>

        </ul>
    </>
}

export default List;