import React from "react";
import Comment from "./Comment/Comment";

const Comments = (props) => {
  const comments = props.comments;
  return (
    <>
      {comments.map((comment) => (
        <Comment></Comment>
      ))}
    </>
  );
};

export default Comments;
