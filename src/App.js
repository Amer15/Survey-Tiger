import React from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './Routes';
import { SurveyProvider } from './context/SurveyContext';
import './App.css';


function App() {
  return (
   <div className='App'>
       <Navbar />
       <SurveyProvider>
         <Routes />
       </SurveyProvider>
   </div>
  );
}

export default App;
