import axios from 'axios';
import React ,{Component} from 'react'
import Post from '../Post/Post'
import classes from '../Blog/Blog.module.css'
import FullPost from '../FullPost/FullPost'
import NewPost from '../NewPost/NewPost'
import {Route , NavLink} from 'react-router-dom'
class Blog extends Component 
{
    state={
        para:null,
        click:false,
        post:{
            body:null,
            title:null,
        }
    }
    componentDidMount()
    {
        console.log("hi",this.props.children)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(req=>
            {
                //console.log(req.data)
                this.setState({para:req.data})
                //console.log(this.state.para)
            })
    }
    onClickHandler=(postkey)=>
    {
        this.setState({
            click:true,
            post:{
            title:this.state.para[postkey].title,
            body:this.state.para[postkey].body
            }
        })
    }
onhide=()=>
{
    this.setState({click:false})
}
    render()
    {
        console.log(this.state.para)
        return(
            
            <div>
                <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact={true} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact={true} to="/NewPost">New Post</NavLink>
                                
                        </li>
                    </ul>
                </nav>
                </header>
            <div className={classes.Blog}>
                <header style={{textAlign:"center",padding:"10px"}}>
                  <h2>  <strong>WRITE-BLOGS</strong> </h2>
                </header>
               {this.state.para?Object.keys(this.state.para).map((postkey)=><Post click={this.state.click} clicked={()=>this.onClickHandler(postkey)} key={this.state.para[postkey].id} id={this.state.para[postkey].id} body={this.state.para[postkey].body} title={this.state.para[postkey].title}/>):"Wait..."} 
            </div>
<Route path="/"  exact={true} component={()=><FullPost hide={this.onhide} click={this.state.click} body={this.state.post.body} title={this.state.post.title}/>}/>
<Route path="/NewPost" component={NewPost}/>
{/*wht should happen when this "/" is the active path we ca use component or render{()=>{}} component take instance of a particular component*/  }

            </div>
        );
    }
}
export default Blog;
//<FullPost hide={this.onhide} click={this.state.click} body={this.state.post.body} title={this.state.post.title}/>
//<NewPost/>