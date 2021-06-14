import React from "react";
import * as actionTypes from "./state/action.js";
import { useSelector, useDispatch } from "react-redux";

export default function NewPage() {
  const myData = useSelector((state) => state.old.tweetsData);
  const metaData = useSelector((state) => state.tweet.newMetaData);
  const dispatch = useDispatch();
  const myFucntion = () => {
    dispatch({
      type: actionTypes.TWEET_MESSAGE_DATA,
      payload: "Hi click on button is being called",
    });
  };
  console.log(metaData);
  return (
    <>
      <div>{myData}</div>
      <div>{metaData.map((v) => Object.entries(v).map((t) => t))}</div>
      <button onClick={myFucntion}>Cick me!</button>
      <button onClick={() => window.history.back()}>GO BACK</button>
    </>
  );
}
