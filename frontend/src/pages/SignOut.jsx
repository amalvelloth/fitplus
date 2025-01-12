import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function SignOut() {
  return (
    <section className='flex'>
      <DesktopMenu />
      <div className='h-screen w-full flex items-center justify-center bg-neutral-900'>
        <h1 className='text-white text-4xl'>Sign Out</h1>
      </div>
    </section>
  )
}

export default SignOut