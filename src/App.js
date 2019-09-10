import React from "react";
import "./App.css";

import Input from "./components/Input";
import AskBlock from "./components/AskBlock";
import Logo from "./components/Logo";

import ToolTip from "./containers/ToolTip";

function App() {
  return (
    <div className="App">
      {/* Example 1 */}
      <ToolTip render={<Input />} tootTipText="ToolTip from input" />
      <ToolTip render={<AskBlock />} tootTipText="ToolTip from ask block" />
      <ToolTip render={<Logo />} tootTipText="ToolTip from logo" />

      {/* Example 2 */}
      <ToolTip tootTipText="ToolTip from input">
        <Input />
      </ToolTip>
      <ToolTip tootTipText="ToolTip from ask block">
        <AskBlock />
      </ToolTip>
      <ToolTip tootTipText="ToolTip from logo">
        <Logo />
      </ToolTip>
    </div>
  );
}

export default App;
