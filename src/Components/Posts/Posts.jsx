import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
  const posts = props.posts;
  console.log("POSTS");
  console.log(posts);
  return (
    <>
      <div styles="text-align:center;display:flex; justify-content:center ">
        {posts &&
          posts.map((post) => (
            <Post key={post.id} post={post} showDetailButton={true}></Post>
          ))}
      </div>
    </>
  );
};

export default Posts;
