import React from "react";

const PostContainer = () => {
  const handleCreatePost = async () => {
    const title = prompt();
  };

  return (
    <div className="post__list">
      <button onClick={handleCreatePost}>Add new post</button>
    </div>
  );
};

export default PostContainer;
