import React, { useState, useEffect } from "react";
import axios from "axios";

function HookFetchData() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromBnClick, setIdFromBnClick] = useState(1);

  const fetchPosts = () => {
    setIdFromBnClick(id);
  };

  /*  useEffect(() =>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response)
        setPosts(response.data)
    })
    .catch((e) => {
      console.log("Error ", e);
    })
   }, []) */

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((e) => {
        console.log("Error ", e);
      });
  }, [idFromBnClick]);

  return (
    <div>
      {/* <ul>
        {
            posts.map(post =>(
                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul> */}

      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => {setIdFromBnClick(id)}}> Fetch posts</button>
      <div>
        {posts.id} - {posts.title}
      </div>
    </div>
  );
}

export default HookFetchData;
/* function newFunction(setIdFromBnClick, id) {
    return () => { setIdFromBnClick(id); };
}
 */
