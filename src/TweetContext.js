import { createContext } from "react";

const Context = createContext({
  value: "naman",
  setValue: () => {
    console.log("contextis live");
  },
});

export default Context;
