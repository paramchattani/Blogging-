import React from 'react'
import  classes from '../Post/Post.module.css'

const Post=(props)=>
{
return(
 <div  onClick={props.clicked} className={classes.Post}>   
     {props.title}
 </div>
);
}
export default Post;