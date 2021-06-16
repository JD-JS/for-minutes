import React from "react";
import { Link } from "react-router-dom";
import { Heading, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const Navigation = () => {
  return (
    <Text align="center" bold>
      <Heading size="samll" color="black">
        <div className="navigation">
          <Link to="/">Home </Link>
          <Link to="/minutes">MinutesList </Link>
          <Link to="/post">Post </Link>
        </div>
      </Heading>
    </Text>
  );
};

export default Navigation;
