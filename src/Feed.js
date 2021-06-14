import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./Firebase";
import { useDispatch } from "react-redux";
import * as actionTypes from "./stateNew/action.js";

function Feed() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("posts").onSnapshot(
      (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data()))
      //   console.log(snapshot.docs.map((doc) => doc?.id))
    );
  }, []);
  useEffect(() => {
    dispatch({
      type: actionTypes.NEW_META_DATA,
      payload: posts,
    });
    console.log("Hey i was called");
  }, [posts, dispatch]);
  return (
    <div className="feed">
      {/* Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*tweetbox*/}
      <TweetBox />
      {/* <FlipMove> */}
      {/*tweets*/}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          id={post.id}
        />
      ))}
      {/* </FlipMove> */}
    </div>
  );
}

export default Feed;
