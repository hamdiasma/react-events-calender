import React from "react";
import CalenderDiv from "./components/CalenderDivDay";

function App() {
  return <div className="App">
    {
      [...Array(24)].map((elem, i) => <CalenderDiv key={i} time={i.toFixed(2)} />)
    }

  </div>;
}

export default App;
