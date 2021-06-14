import React, { useState, useEffect } from "react";
import TweetContext from "./TweetContext";
import db from "./firebase";

const TweetContextProvider = () => {
  const [data, setData] = useState();

  useEffect(() => {
    db.collection("posts").onSnapshot(
      (snapshot) => setData(snapshot.docs.map((doc) => doc.data()))
      //   console.log(snapshot.docs.map((doc) => doc?.id))
    );
  }, []);

  console.log(data);

  return <TweetContext.Provider setValue={data}></TweetContext.Provider>;
};

export default TweetContextProvider;
