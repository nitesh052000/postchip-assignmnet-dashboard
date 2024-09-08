import React from 'react'

const Updates:React.FC = () => {
  return (
    <div className=' flex '>
    <div className=' w-[448px] h-[368px] ml-[68px]  absolute top-[171px] bg-white rounded-lg border border-gray-300'>
        <div className=' w-[416px] h-[336px] pl-6 pt-4'>
            <div className='w-[416px] h-[72px] space-y-4'>
              <div className='w-[416px] h-[20px] flex justify-between '>
                <h2 className=' font-bold'>Shipment Updates</h2>
                <h2>Total orders:394</h2>
              </div>
              <div className='w-[416px]h-[36px] flex gap-2  text-textColor font-bold text-[13px] '>
          <div className='w-[85px] h-[36px] border-[1px] bg-orange-50 rounded '>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Delivered</h1>
          </div>
          <div className='w-[600px] h-[36px] border-[1px] bg-boxbackground rounded'>
            <h1 className='pt-2  pb-3 pl-1 font-[650px] text-[13px]'>Out for delivery</h1>
          </div>
          <div className='w-[77px] h-[36px] border-[1px] bg-boxbackground rounded'>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Intransit</h1>
          </div>
          <div className='w-[87px] h-[36px] border-[1px] bg-boxbackground rounded '>
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Pending</h1>
          </div>
          <div className='w-[185px] h-[36px] border-[1px] bg-boxbackground rounded '>
            
            <h1 className='pt-2 pr-3 pb-3 pl-3'>Ex</h1>
            
            
           </div>
             </div>
            </div>
        </div>
        <div className='h-[160px] w-[160px]  absolute top-[120px] left-1/2 transform -translate-x-1/2'>
        <img src="/piechart.jpg.png" />
        </div>
        <div className='h-[56px] w-[416px] absolute top-[300px] ml-3'>
            <img src='/second.png' />
        </div>
    </div>

    <div className=' w-[216px] h-[368px] bg-divcolor absolute top-[171px] ml-[532px] rounded-lg'>
        <div className='w-[156px] h-[328px] ml-6 mt-4 text-white'>
            <h1 className=' font-bold'>Star Facts about your orders!!!</h1>
            <p className=' text-[13px] mt-2'>There are 8 shipments that have been in out for delivery for maore than 3 days</p>
            <p className='text-[13px] mt-5'>There are 5 shipments in exception right now</p>
            <p className='text-[13px] mt-5'>The maximum chargebacks are from Miami.</p>
            <button className=' rounded-lg pl-2 pb-2 bg-white text-black mt-5 font-semibold'>check orders Page</button>
        </div>
        
    </div>
     <div className=' w-[447px] h-[368px] ml-[765px] absolute top-[171px] bg-white rounded-lg'>
        <div className=' ml-6 mt-4'>
            <h1 className=' font-bold text-[14px]'>Tracking Page Views Vs Orders</h1>
            <p className='text-[13px] mt-3 pr-1'>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
        </div>
        <div className='w-[415px] h-[228px] mt-4'>
            <div>
                <img className='ml-4' src='/tracking.png'/>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Updates
