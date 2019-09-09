import React from "react";
import withHover from "../../hoc/withHover";

const Input = props => {
  return <input type="text" placeholder="Name..." />;
};

export default withHover(Input);
