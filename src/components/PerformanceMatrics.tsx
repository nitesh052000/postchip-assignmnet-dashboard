import React from 'react'
import { TiShoppingBag } from "react-icons/ti";
import Updates from './Updates'; 

const PerformanceMatrics:React.FC = () => {

const tabs = ['Lifetime', 'Last Week', 'Last Month', 'Customize Time'];

  return (
    <div className=' w-full h-[607px] relative bg-performanceColor'>
        <h3 className=" text-textColor   text-[24px] ml-[68px] font-bold absolute top-[40px]">Instant Dive into Your Performance Metrics</h3>

        <div className='absolute top-[100px] w-[564px] h-[36px] flex gap-2 ml-[68px] text-textColor font-bold text-[13px] '>
          <div className='w-[76px] h-[36px] border-[1px] bg-white rounded '>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Lifetime</h1>
          </div>
          <div className='w-[90px] h-[36px] border-[1px] bg-white rounded'>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Last Week</h1>
          </div>
          <div className='w-[96px] h-[36px] border-[1px] bg-white rounded'>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Last Month</h1>
          </div>
          <div className='w-[83px] h-[36px] border-[1px] bg-white rounded '>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Last Year</h1>
          </div>
          <div className='w-[185px] h-[36px] border-[1px] bg-white rounded '>
            <div className='flex'>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Customize Time Line</h1>
            <TiShoppingBag className='h-[20px] w-[20px] mt-2' />
            </div>
          </div>
        </div>
           <Updates />
        </div>
   
  )
}

export default PerformanceMatrics
