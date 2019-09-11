import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: "red" }}>Something went wrong :(</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
