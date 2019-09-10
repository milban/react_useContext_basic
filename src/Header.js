import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <haeder>
      <a href="#">Home</a> Hello, {name} |{" "}
      {loggedIn ? "logged in" : "anonymous"}
    </haeder>
  );
};

export default Header;
