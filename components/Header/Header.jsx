"use client";
import { BellIcon } from 'lucide-react';
import { CommandDemo } from '../Command/Command'
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';


export const Header = () => {
  const [notifications, setNotification] = useState([
    {
      text: "This is a notification",
      date: "02-02-2025",
      read: false
    },
    {
      text: "This is another notification",
      date: "02-02-2025",
      read: true
    }
  ]);

  return (
    <div className='grid grid-cols-2 p-4 gap-4 border-b'>
      <CommandDemo />
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" className="relative">
              <div className={`h-3 w-3 rounded-full my-1 ${notifications.find(x => x.read === true) ? "bg-green-500" : "bg-neutral-200"} absolute top-0 right-1`}></div>
              <BellIcon className='h-5 w-5' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {
              notifications.map((item, key) => <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                <div className={`h-3 w-3 rounded-full my-1 ${item.read ? "bg-green-500" : "bg-neutral-200"}`}></div>
                <div>
                  <p>{item.text}</p>
                  <p className='text-xs text-neutral-500'>{item.date}</p>
                </div>

              </DropdownMenuItem>)
            }
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

    </div>
  )
}
