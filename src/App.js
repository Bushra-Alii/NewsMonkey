import './App.css';
import React, {createContext, useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const modeContext = createContext()

function App() {
  const [mode, setMode] = useState(true)

  const toggleMode =()=>{
    setMode(!mode)
    }
  

  return (
   <div>
    <modeContext.Provider value={{mode, toggleMode}}>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path= "/" element={<News category="general" pageSize= {5} key="general"/>} />
      <Route exact path= "/business" element={<News category="business" pageSize= {5} key="business"/>} />
      <Route exact path= "/entertainment" element={<News category="entertainment" pageSize= {5} key="entertainment"/>} />
      <Route exact path= "/health" element={<News category="health" pageSize= {5} key="health"/>} />
      <Route exact path= "/science" element={<News category="science" pageSize= {5} key="science"/>} />
      <Route exact path= "/sports" element={<News category="sports" pageSize= {5} key="sports"/>} />
      <Route exact path= "/technology" element={<News category="technology" pageSize= {5} key="technology"/>} />
    </Routes>
    </BrowserRouter>
    </modeContext.Provider>
      </div>
  );
}

export default App;
