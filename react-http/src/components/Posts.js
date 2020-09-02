import React, { Component } from 'react'
import axios from 'axios'

export class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts :[],
             error : false
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            console.log(response)
            this.setState({posts : response.data});
        }).catch(error =>{
            console.log(error)
            this.setState({error : true})
        })
    }
    
    render() {
        return (
            <div>
                Load Posts
                {
                   this.state.posts ?  this.state.posts.map(post=>{
                        return <div id={post.id}> {post.title} </div>
                    }) :
                    null
                }
                {
                    this.state.error ? <div> Error in request </div> : <div></div>
                }
                
            </div>
        )
    }
}

export default Posts
