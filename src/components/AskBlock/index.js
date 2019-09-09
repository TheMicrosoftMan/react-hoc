import React, { useState } from "react";

const AskBlock = props => {
  const [isShowToolTip, setShowToolTip] = useState(false);

  return (
    <div
      className="container"
      onMouseOver={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div className="Ask">?</div>
      {isShowToolTip && <div className="ToolTip">{props.tootTipText}</div>}
    </div>
  );
};

export default AskBlock;
