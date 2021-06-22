import React from 'react'
import classes from '../FullPost/FullPost.module.css'
const FullPost=(props)=>
{
    let content=null;
    if(props.click)
    content=(<div onClick={props.hide} className={classes.FullPost}>
        <header style={{paddingBottom:"30px"}}>READ HERE...</header>
        <p>`{props.body}</p>
        <p>{props.title}</p></div>)
return(
    <div >
        
    {content}
    </div>
);
} 
export default FullPost;