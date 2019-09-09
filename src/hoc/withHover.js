import React, { useState } from "react";

const withHover = Component => {
  return props => {
    const [isShowToolTip, setShowToolTip] = useState(false);

    return (
      <div
        className="container"
        onMouseOver={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
      >
        <Component {...props} />
        {isShowToolTip && <div className="ToolTip">{props.tootTipText}</div>}
      </div>
    );
  };
};

export default withHover;
