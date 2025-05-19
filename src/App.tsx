import { useState } from "react";
import "./App.css";
import Header from "./Header";
function App() {
  const [dark,setDark] = useState(false)
  return (
    <>
      <div className={`w-[100vw] h-[100vh] ${dark ? 'dark':''}`}>
        <Header  setDark = {setDark}></Header>
      </div>
    </>
  );
}

export default App;
