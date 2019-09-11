import React, { useState } from "react";

const ToolTip = props => {
  const [isShowToolTip, setShowToolTip] = useState(false);
  return (
    <div
      className="container"
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      {props.children}
      {isShowToolTip && <div className="ToolTip">{props.tootTipText}</div>}
    </div>
  );
};

export default ToolTip;
