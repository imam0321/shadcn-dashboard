import React from 'react'

export const UserItem = () => {
  return (
    <div className='flex justify-between items-center gap-2 border rounded-lg p-2'>
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex justify-center items-center">
        <p>IM</p>
      </div>
      <div className='grow'>
        <p className='text-[16px] font-bold'>Imam Hossain</p>
        <p className='text-sm text-neutral-500'>imam.hossain@gmail.com</p>
      </div>
    </div>
  )
}
