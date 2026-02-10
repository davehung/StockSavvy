'use client'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import NavItems from "./Navitems"
import {LogOut} from "lucide-react";
const UserDropdown = () => {
    const router=useRouter ();

    const handleSignout=async()=>{
        router.push('/sign-in')
    }

    const user={
        name:'John Doe',
        email:'R3HmX@example.com'
    }


  return (
   <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-centergap-3 text-gray-4 hover:text-yellow-500">
        
        <Avatar className="h-8 w-8">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
    {user.name[0]}

  </AvatarFallback>
</Avatar>

<div className="hidden md-flex flex-col items-start">
<span className='text-base font-medium text-gray-400'>
    {user.name}
</span>

</div>

    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="text-gray-400">

<DropdownMenuLabel className="text-gray-400">
    <div className="flex flex-col items-start">

    <div className="flex relative items-center gap-3 py-2">
         <Avatar className="h-10 w-8">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
    {user.name[0]}

  </AvatarFallback>
</Avatar>

<div className="flex flex-col">
<span className='text-base font-medium text-gray-400'>
    {user.name}
</span>

<span className='text-sm text-gray-400'>
    {user.email}
</span>

</div>
</div>
</div>
    </DropdownMenuLabel>

<DropdownMenuSeparator className="bg-gray-500"/>

<DropdownMenuItem onClick={handleSignout} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
        <LogOut className="mr-2 h-4 w-4 hidden sm:block" />
        LogOut


</DropdownMenuItem>

<DropdownMenuSeparator className="hidden sm:block bg-gray-500"/>

<nav className="sm:hidden">
        <NavItems/>


</nav>

  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown