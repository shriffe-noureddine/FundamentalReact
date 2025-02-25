import NewPost from './NewPost'
import Post from './Post'
import { useState } from 'react';
function List(){

    const [useName, setName] = useState('')
    const [useBody, setBody] = useState('')
    function nameChangeHandler(e){
        setName(e.target.value);
    }
    function bodyChangeHandler(e){
        setBody(e.target.value);
    }
    return <>
        <NewPost name={nameChangeHandler} body={bodyChangeHandler}/>
        <Post name={useName} body={useBody}/>
    </>
}

export default List;