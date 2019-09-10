import React from "react";
import Header from "./Header";
import { useLogUserIn } from "./context";

export default () => {
  const logUserIn = useLogUserIn();
  return (
    <>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user In</button>
    </>
  );
};
