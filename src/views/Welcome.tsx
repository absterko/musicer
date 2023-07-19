import React from "react";
import "./Welcome.scss";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <>
      <h1 className="welcome-header">Musicer</h1>
      <h2 className="welcome-text">Let's taste the music.</h2>
    </>
  );
};

export default Welcome;
