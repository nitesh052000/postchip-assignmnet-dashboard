import React from 'react';
import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import NotificationCards from './components/NotificationCards';
import PerformanceMatrics from './components/PerformanceMatrics';
import FunctionalitySection from './components/FunctionalitySection';
import { AppProvider } from '@shopify/polaris';

const App:React.FC=()=>{
  return (
     
    <div className='h-[1688px] w-full'>
        <Header />
        <div className=' bg-kyalikhu h-96 w-full'>
        <Greeting />
        <NotificationCards />
        </div>
        <PerformanceMatrics />
        <div className=' w-full h-[661px] bg-kyalikhu'>
          <FunctionalitySection /> 
        </div>
         
    </div>
   
  )
}

export default App;