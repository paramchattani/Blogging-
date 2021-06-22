import React ,{Component} from 'react'
import classes from '../NewPost/NewPost.module.css'
import axios from 'axios'
class NewPost extends Component 
{
    state={
        post:{
            userId:10,
            title:"",
            body:"",
        }
    }
    componentDidMount()
    {
        console.log("hello",this.props)
    }

    handleChangetitle=(e)=>
    {
        const {value}=e.target
        this.setState(prevState=>
            ({
                post:{
                    ...prevState.post,
                    title:value
                }
            })
        )
    }
    handleChangebody=(e)=>
    {
        const {value}=e.target
        this.setState(prevState=>
            ({
                post:{
                    ...prevState.post,
                    body:value
                }
            })
        )
    }
    handleClick=()=>
    {
        const newpost=this.state.post
axios.post('http://jsonplaceholder.typicode.com/posts',{newpost})
.then(res=>{console.log(res)
alert('post created')
})
    }
    render()
    {
        
        return(
                <div className={classes.NewPost}>
                  <header style={{paddingBottom:"20px"}}>  <strong>NEW-POST</strong> </header>
<label htmlFor="Title"><strong>Title</strong></label>
    <textarea id="title"  value={this.state.post.title} name="title" onChange={(e)=>this.handleChangetitle(e)} placeholder="Post title.."/>
    <label htmlFor="Body"><strong>Body</strong></label>
    <textarea id="body" value={this.state.post.body} name="body" onChange={(e)=>this.handleChangebody(e)} placeholder="Post body.."/ >
    <button onClick={this.handleClick} className={classes.button}><strong>Submit</strong></button>
                </div>
  
        );
    }
}
export default NewPost; 