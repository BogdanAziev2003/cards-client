import './App.css';
import Add from './Components/Add/Add';
import All from './Components/All/All';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Grev from './Components/Pages/Grev';
import Dead from './Components/Pages/Dead';
import Work from './Components/Pages/Work';
import Block from './Components/Pages/Block';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/grev" element={<Grev/>} />
        <Route path="/dead" element={<Dead/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/block" element={<Block/>} />
      </Routes>
    </div>
  );
}

export default App;
