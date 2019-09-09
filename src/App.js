import React from "react";
import "./App.css";

import Input from "./components/Input";
import AskBlock from "./components/AskBlock";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Input tootTipText="ToolTip from input" />
      <AskBlock tootTipText="ToolTip from ask block" />
      <Logo tootTipText="ToolTip from logo" />
    </div>
  );
}

export default App;
