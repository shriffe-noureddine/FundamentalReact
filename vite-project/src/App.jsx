import "./App.module.css";
import List from "./components/List";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isvisible, setVisibility] = useState(false);
  function hideVisibilityHandler() {
    setVisibility(false);
  }

  function showVisibilityHandler() {
    setVisibility(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showVisibilityHandler} />
      <List isPosting={isvisible} onStopPosting={hideVisibilityHandler} />
    </>
  );
}

export default App;
