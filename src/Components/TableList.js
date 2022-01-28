import React, { useState } from "react";

function TableList(props) {
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [timePosted, setTimePosted] = useState(new Date());

  function renderComment(event) {
    setComment(event.target.value);
  }

  function renderTopic(event) {
    setTopic(event.target.value);
  }

  function renderImage(event) {
    setImageURL(event.target.value);
  }

  function renderNewDate(event) {}

  function submitComment(event) {
    event.preventDefault();
    const addComment = {
      comment,
      topic,
      imageURL,
    };
    props.func(addComment);
    clearState();
  }
  
  // clears input fields
  function clearState() {
    setComment("");
    setTopic("");
    setImageURL("");
  }

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={renderComment}
        placeholder="comment"
      ></input>
      <br />
      <input
        type="text"
        value={topic}
        onChange={renderTopic}
        placeholder="topic"
      ></input>
      <br />
      <input
        type="text"
        value={imageURL}
        onChange={renderImage}
        placeholder="image URL"
      ></input>
      <button onClick={submitComment}>Submit</button>
    </div>
  );
}

export default TableList;
