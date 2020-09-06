import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
import Comments from "./Comments/Comments";
const PostDetails = (props) => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  let { id } = useParams();
  console.log("postId");
  console.log(id);
  console.log(comments);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((err) => console.log(err));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Post post={post} showDetailButton={false} key={id}></Post>
      <Comments comments={comments}></Comments>
    </>
  );
};

export default PostDetails;
