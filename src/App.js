import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import JavascriptBasics from './Components/JavascriptBasics';
import MainPage from './Components/MainPage';
import MainCompletePage from './Components/MainCompletePage';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header> */}
      {/* <Dashboard/> */}
      {/* <JavascriptBasics/> */}
      {/* <MainPage/>
       */}
       

       <Routes>
        <Route path="*" element={<Dashboard />}/>
          
         <Route path="mainpage" element={<MainCompletePage/>}/>
      </Routes> 

      

    </div>
  );
}

export default App;
