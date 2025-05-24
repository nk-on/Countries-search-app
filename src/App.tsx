import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
function App() {
  const [dark,setDark] = useState(false)
  return (
    <>
      <div className={`w-[100vw] h-[100vh] ${dark ? 'dark':''}`}>
        <Header  setDark = {setDark}></Header>
        <Outlet />
      </div>
    </>
  );
}

export default App;
