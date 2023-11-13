import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import React from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();
  const onTitleChnaged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle(""); //setting the local state back to empty after saving
      setContent("");
    }
  };
  
  const canSave = Boolean(title)&&Boolean(content)&& Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTiltle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChnaged}
        />
        <label htmlFor="postUser">User:</label>
        <select
          name="postUser"
          id="postUser"
          value={userId}
          onChange={onUserChanged}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
