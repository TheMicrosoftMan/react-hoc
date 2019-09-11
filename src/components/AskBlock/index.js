import React from "react";
import withHover from "../../hoc/withHover";

class AskBlock extends React.Component {
  state = {
    generatedError: false
  };

  handleClick = () => {
    if (Math.random() > 0.5) {
      this.setState({ generatedError: true });
    }
  };

  render() {
    if (this.state.generatedError) {
      throw new Error("I crashed!");
    }
    return (
      <div className="Ask" onClick={this.handleClick}>
        ?
      </div>
    );
  }
}

export default withHover(AskBlock);
