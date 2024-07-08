import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Main from './conponent/Main';
import NavBar from './conponent/NavBar';
import Header from './conponent/Header';

function App() {
  return (
    <div>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/"  element = {<Main/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
