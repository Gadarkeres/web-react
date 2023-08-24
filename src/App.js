import './App.css';
//React Router
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import MenuMobile from './components/MenuMobile';
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import { useState } from 'react';

function App() {
const [menuisvisible, setMenuisvisible] = useState(false); {/*  < definindo estado da visibilidade do menu */}
  return (
    <div className="App">
      <BrowserRouter>
      <MenuMobile menuisvisible = {menuisvisible} setMenuisvisible = {setMenuisvisible} />
      <Header setMenuisvisible = {setMenuisvisible} ></Header>
    <div className="container">
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/sobre'element={<About/>}/>
      <Route path='/projetos'element={<Projects/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
