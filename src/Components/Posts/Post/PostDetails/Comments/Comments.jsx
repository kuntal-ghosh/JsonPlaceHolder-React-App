import React from "react";
import Comment from "./Comment/Comment";
import Typography from "@material-ui/core/Typography";

const Comments = (props) => {
  const comments = props.comments;
  return (
    <>
      <Typography
        variant="h6"
        style={{ textAlign: "center", margin: "50px 0" }}
      >
        Comments({comments.length})
      </Typography>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id}></Comment>
      ))}
    </>
  );
};

export default Comments;
