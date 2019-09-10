import React from "react";
import "./App.css";

import ErrorBoundary from "./ErrorBoundary";
import AskBlock from "./components/AskBlock";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AskBlock />
      </ErrorBoundary>
    </div>
  );
}

export default App;
