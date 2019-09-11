import React from "react";
import "./App.css";

import Input from "./components/Input";
import AskBlock from "./components/AskBlock";
import Logo from "./components/Logo";

import ToolTip from "./containers/ToolTip";
import ErrorBoundary from "./hoc/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Input tootTipText="ToolTip from input" />
      <ErrorBoundary>
        <AskBlock tootTipText="ToolTip from ask block" />
      </ErrorBoundary>
      <ToolTip tootTipText="ToolTip from logo">
        <Logo />
      </ToolTip>
    </div>
  );
}

export default App;
