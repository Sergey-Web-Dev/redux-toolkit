import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const removeHandle = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const updateHandle = () => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <div className="post" onClick={updateHandle}>
      {post.id} - {post.title}
      <button onClick={removeHandle}>Remove Post</button>
    </div>
  );
};

export default PostItem;
