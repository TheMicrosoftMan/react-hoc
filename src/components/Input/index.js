import React, { useState } from "react";

const Input = props => {
  const [isShowToolTip, setShowToolTip] = useState(false);

  return (
    <div
      className="container"
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <input type="text" placeholder="Name..." />
      {isShowToolTip && <div className="ToolTip">{props.tootTipText}</div>}
    </div>
  );
};

export default Input;
