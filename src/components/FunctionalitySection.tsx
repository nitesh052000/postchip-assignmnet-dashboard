import { TextField } from '@shopify/polaris'
import React from 'react'

import { useState } from 'react';


const FunctionalitySection:React.FC = () => {

  const [text, setText] = useState("FF9898");
  const [accent , setAccent] = useState("571010");
  const [background,setBackground] = useState("FFEAEA");


  return (
    <>
    <div className='font-bold text-[24px] ml-[68px] relative top-[50px]'>Discover the Heart of Our Functionality
    </div>
     <div  className=' flex'>
    <div className =' w-[332px] h-[408px] relative top-[100px] ml-[69px] bg-white rounded-lg'>
     
    <div className='w-[300px] h-[324px] pl-3 pt-3' >
    
        <h1 className=' font-bold'>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h1>
        <p className=' mt-3'>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
      <div className='flex space-x-2 mt-2'>
      <TextField
      label="Accent Color"
      value={accent}
      autoComplete="off"
    />
      <div className=' w-[64px] h-[32px] bg-pink-300 mt-5 rounded-lg'></div>

      </div>
      <div className='flex space-x-2 mt-2'>
      <TextField
      border-color = "black"
      label="Text Color"
      value={text}
      autoComplete="off"
    />
      <div className=' w-[64px] h-[32px] bg-amber-900 mt-5 rounded-lg'></div>

      </div>
      <div className='flex space-x-2'>
      <TextField
      label="Background Color"
      value={background}
      autoComplete="off"
    />
      <div className=' w-[64px] h-[32px] bg-pink-100 mt-5 rounded-lg'></div>

      </div>
      <div className=' w-[300px] h-[28px] flex mt-4 space-x-4'>
        <button className= ' pr-2 pl-2 border border-gray-300 rounded-lg' >Preview</button>
        <button className=" pl-2 pr-2 bg-slate-700 text-white  rounded-lg">Apply Colors</button>
       </div>
      </div>
    </div>

    <div className='h-[408px] w-[448px] ml-[20px] relative top-[100px]  rounded-lg '>
      <div className=' bg-white h-[152px] rounded-lg'>
        <h1 className='text-[14px] font-bold  ml-2 mt-2 pt-2'>Exclusive Onboarding Support for High-Volume Brands</h1>
        <p className='text-[13px] ml-2 mt-2'>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience and maximize the potential of our services</p>
         <button className=" h-[28px] ml-2 mt-8 pl-2 pr-2 bg-slate-700 text-white  rounded-lg ">Schedule A Call</button>
      </div>
      <div className='h-[226px] bg-white rounded-lg'>
        <h1 className='text-[14px] font-bold mt-3 ml-2 pt-2'>Explore Our Integrated Ecosystem</h1>
        <p className='text-[13px] font-[450px] ml-2 mt-3'>Discover a variety of popular integrations tailored for your convenience. Click to explore and integrate these powerful tools, directing you to our comprehensive Integrations.</p>
        <div className='w-[266px] h-[34px]'>
            <img className='w-[266px] h-[34px] ml-2 mt-3' src='/Logos.png' />
        </div>
        <button className=" h-[28px] ml-2 mt-6 pl-2 pr-2 bg-slate-700 text-white  rounded-lg ">Explore Integrations</button>
      </div>
    </div>
    <div className='h-[404px] w-[332px] ml-[20px] relative top-[100px] bg-white rounded-lg border border-500'>
         <h1 className=' font-bold ml-2 mt-2'>Seamlessly Integrate Custom HTML Elements</h1>
        <p className=' mt-3 ml-2'>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
        <div>
            <h1 className='ml-2 mt-3'>HTML Link</h1>
            <textarea className='ml-2 mt-2 w-[300px] h-[128px] rounded-lg border border-black'>Value</textarea>
        </div>
         <button className= ' mt-3 ml-2 pr-2 pl-2 border border-gray-300 rounded-lg' >Preview</button>
        <button className=" h-[28px] mt-3 ml-2 pl-2 pr-2 bg-slate-700 text-white  rounded-lg">Apply Colors</button>
    </div>
    </div>
    </>
  )
}

export default FunctionalitySection
