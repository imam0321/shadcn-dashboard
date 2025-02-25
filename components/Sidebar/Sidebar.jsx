import React from 'react'
import { UserItem } from '../UserItem/UserItem'

export const Sidebar = () => {
  return (
    <div className='flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4'>
      <UserItem/>
      <div className="grow">Menu</div>
      <div className="">Setting</div>
    </div>
  )
}
