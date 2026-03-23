import Maincontent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`p-4 h-screen flex gap-3 `}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`flex flex-1 flex-col gap-3`}>
        <Navbar />
        <Maincontent />
      </div>
    </div>
  );
};

export default App;
