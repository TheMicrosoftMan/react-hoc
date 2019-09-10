import React from "react";

class AskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { generateError: false };
  }

  handleClick = () => {
    if (Math.random() > 0.5) {
      this.setState({ generateError: true });
    }
  };

  render() {
    if (this.state.generateError) {
      throw new Error("I crashed!");
    }
    return (
      <div className="Ask" onClick={this.handleClick}>
        ?
      </div>
    );
  }
}

export default AskBlock;
