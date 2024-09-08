import React from 'react'

const NotificationCards:React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative pt-[164px] h-[168px] w-full">
      <div className="bg-white p-4 rounded-lg shadow-md h-[168px] w-[332px] ml-[68px]">
        <h3 className="font-semibold">Order Sync Successful!</h3>
        <p className=' mt-1'>Your order details from the last 30 days have been successfully synced.</p>
        <button className="mt-6 bg-slate-800 text-white py-1 px-4 rounded-lg">Explore Your Orders</button>
      </div>
      <div className="bg-customColor p-4 rounded-lg shadow-md h-[168px] w-[332px]">
        <h3 className="font-semibold">Customize Customer Notification</h3>
        <p className='mt-1'>Tailor your email experience. Set the sender email and notification triggers.</p>
        <button className="mt-6 bg-slate-800 text-white py-1 px-4 rounded-lg">Configure Notifications</button>
      </div>
      <div className="bg-anotherColor p-4 rounded-lg shadow-md h-[168px] w-[332px]">
        <h3 className="font-semibold">Your Tracking Link has been generated</h3>
        <p className='mt-1'>Include the link to your store’s navigation menu.</p>
        <div className=' space-x-6'>
        <button className="mt-6 bg-white  text-black py-1 px-2 rounded-lg">Copy Link</button>
         <button className="mt-6 bg-slate-800 text-white py-1 px-2 rounded-lg">Go To Navigation Menu</button>
         </div>
      </div>
    </div>
  )
}

export default NotificationCards



