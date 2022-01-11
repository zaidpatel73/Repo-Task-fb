import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Fav from "./components/Fav.jsx";
import { setData } from './services/service';
import Data from './data/data';
function App() {
  // setData(Data)
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Fav" element={<Fav/>}></Route>
        </Routes>  
      </div>      
    </>
  );
}

export default App;
