import React from 'react'
import DesktopMenu from '../components/DesktopMenu'

function WorkoutPrograms() {
  return (
    <section className='flex'>
      <DesktopMenu />
      <div className='h-screen w-full flex items-center justify-center bg-neutral-900'>
        <div className="flex-col">
          <h1 className='text-white text-4xl'>Training Programs</h1>
          <h1 className='text-white text-xl mt-4'>... some other API fetching here ...</h1> 
        </div>
      </div>
    </section>
  )
}

export default WorkoutPrograms