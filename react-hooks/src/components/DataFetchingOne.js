import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {error ? error : ""}
      {!loading ? post.title : "Loading"}
    </div>
  );
}

export default DataFetchingOne;
