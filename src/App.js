import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './app.scss';
import Home from './Components/Home';

function App() {
  const [active, setActive] = useState('studio');
  const [color, setColor] = useState('#545662');
  return (
    <div className="App">
      <nav>
        <NavLink to="/" style={{backgroundColor: active === 'studio' ? color : '#383a45'}} onClick={()=>{setActive('studio')}}>3D Studio</NavLink>
        <NavLink to="/production" style={{backgroundColor: active === 'production' ? color : '#383a45'}} onClick={()=>{setActive('production')}}>Production</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home  color={color} setColor={setColor}/>} />
      </Routes>
    </div>
  );
}

export default App;
