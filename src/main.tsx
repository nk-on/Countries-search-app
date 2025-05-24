import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter,Route,Routes } from 'react-router'
import Showcase from './components/Showcase.tsx'
import CountryPage from './components/CountryPage.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App />}>
         <Route path='/' element = {<Showcase />}></Route>
         <Route path='/:id' element = {<CountryPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
