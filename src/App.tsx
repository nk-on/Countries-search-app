import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';
import { DataContext } from './DataContext';
function App() {
  const [dark, setDark] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  return (
    <>
      <div className={`${dark ? 'dark bg-[#2B3844]' : ''} h-[100vh]`}>
        <DataContext.Provider value={{ selectedRegion, setSelectedRegion }}>
          <Header setDark={setDark}></Header>
          <Outlet />
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;
