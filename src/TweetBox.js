import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      id: (1000 * Math.random()).toFixed(0),
      displayName: "Naman",
      username: "the_growing_up",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1334857107137433602/xJ248kOj_400x400.jpg",
      like: false,
    });

    setTweetMessage("");
    setTweetImage("");
  };
  //   const UpdateTweet = (e) => {
  //     e.preventDefault();
  //     db.collection("posts").update({
  //       id: (1000 * Math.random()).toFixed(0),
  //       displayName: "Naman",
  //       username: "the_growing_up",
  //       verified: true,
  //       text: tweetMessage,
  //       image: tweetImage,
  //       avatar:
  //         "https://pbs.twimg.com/profile_images/1334857107137433602/xJ248kOj_400x400.jpg",
  //       like: false,
  //     });

  //     setTweetMessage("");
  //     setTweetImage("");
  //   };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1334857107137433602/xJ248kOj_400x400.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whaat's Happening?"
            type="text"
          ></input>
        </div>
        <input
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional :Enter image url"
          type="text"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
