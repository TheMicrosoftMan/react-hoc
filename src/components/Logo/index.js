import React, { useState } from "react";
import Logo from "../../images/logo.svg";

const AskBlock = props => {
  const [isShowToolTip, setShowToolTip] = useState(false);

  return (
    <div
      className="container"
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <img src={Logo} className="App-logo" alt="logo" />
      {isShowToolTip && <div className="ToolTip">{props.tootTipText}</div>}
    </div>
  );
};

export default AskBlock;
