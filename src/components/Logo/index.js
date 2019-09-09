import React from "react";
import withHover from "../../hoc/withHover";
import Logo from "../../images/logo.svg";

const AskBlock = props => {
  return <img src={Logo} className="App-logo" alt="logo" />;
};

export default withHover(AskBlock);
