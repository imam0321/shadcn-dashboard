import React from 'react'
import { UserItem } from '../UserItem/UserItem'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'
import { Bell, Cookie, Inbox, MessageSquare, Settings, User, WalletMinimal } from 'lucide-react'

export const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile"
        },
        {
          link: "/",
          icon: <WalletMinimal />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications"
        },
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs"
        },
      ]
    }
  ]
  return (
    <div className='flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 gap-4'>
      <UserItem />
      <div className="grow">
        <Command style={{ overflow: "visible"}}>
          <CommandList style={{ overflow: "visible"}}>
            {
              menuList.map((menu, index) => <>
                <CommandGroup key={index} heading={menu.group}>
                  {menu.items.map((item, index) => <CommandItem key={index} className="flex gap-2">{item.icon}{item.text}</CommandItem>)}

                </CommandGroup>
                <CommandSeparator />
              </>)
            }
          </CommandList>
        </Command>
      </div>

      <div className="">Setting</div>
    </div>
  )
}
