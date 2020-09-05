import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
const PostDetails = (props) => {
  const [post, setPost] = useState("");
  let { id } = useParams();
  console.log("postId");
  console.log(id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  return (
    <>
      <Post post={post} showDetailButton={false} key={id}></Post>
    </>
  );
};

export default PostDetails;
