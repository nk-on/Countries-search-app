import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { DataContext } from "./DataContext";
import  type { Country } from "./DataInterface";
function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState<Country[] | null>(null);
  return (
    <>
      <div className={`w-[100vw] h-[100vh] ${dark ? "dark" : ""}`}>
        <DataContext.Provider value={{data,setData}}>
          <Header setDark={setDark}></Header>
          <Outlet />
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;
