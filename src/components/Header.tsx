
import Link from 'next/link'
import React from 'react'


const Header =async () => {


  return (
    <>
    <header className='bg-slate-300 py-4'>
      
      <nav className='max-w-7xl mx-auto flex justify-between items-center px-4'>
    
        <ul className='flex gap-4 items-center'>
            <li><Link href="/">home</Link></li>
            <li><Link href="/personagens">presonagens</Link></li>
     
      
        </ul>
      </nav>
    </header>
  
    </>
  )
}

export default Header
