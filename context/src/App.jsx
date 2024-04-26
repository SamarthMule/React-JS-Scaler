import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Family from "./prop-drill/Family";
import Family2 from "./context_api/Family2";
import { FamilyContext } from "./context_api/familyContext";

function App() {
  const familyMessage = {
    familyName: "Invicible",
  };
  return (
    <div className="mainApp">
      <Family message={familyMessage} />
      <FamilyContext.Provider value= {familyMessage}>
        <Family2 />
      </FamilyContext.Provider>
    </div>
  );
}

export default App;
