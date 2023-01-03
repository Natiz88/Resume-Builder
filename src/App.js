import { useState } from "react";
import Basic from "./components/Basic";
import Education from "./components/Education";

function App() {
  const [active, setActive] = useState("personal");
  return (
    <div>
      <h1 className="text-green-400 text-lg font-semibold flex justify-center">
        Resume Builder
      </h1>
      <div className="w-4/5 m-auto flex justify-between items-center p-12">
        <span onClick={() => setActive("personal")}>Personal</span>
        <span onClick={() => setActive("education")}>Education</span>
        <span onClick={() => setActive("skills")}>Skills</span>
        <span onClick={() => setActive("socila")}>Social</span>
        <span onClick={() => setActive("experience")}>Experience</span>
      </div>
      {active === "personal" && <Basic />}
      {active === "education" && <Education />}
    </div>
  );
}

export default App;
