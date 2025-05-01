import { Bell, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='px-4 py-4 border-b border-[#ffffff1a] backdrop-blur-[47]'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center border w-fit border-[#ffffff38] backdrop-blur-[17] bg_lightgrey px-4 py-2' >
                <Link href="/" className='text-[#FFFFFF99] text-small '>Projects</Link>
                 <span className=''><ChevronRight size={16} /></span>
                <Link href="/" className='text-small'>Project Name</Link>
            </div>
            <div className='flex items-center bg-[#0042215e] w-10 h-10 relative rounded-full justify-center'>
                <span className='w-2 h-2 bg-[#F20F0F] absolute top-0 left-1 rounded-full'></span>
                <Link href="" > <Bell size={18} /></Link>
            </div>
        </div>
    </header>
  )
}

export default Header