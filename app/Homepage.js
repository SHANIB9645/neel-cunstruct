import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import TopBar from './components/TopBar'
import ProjectDetail from './project/ProjectDetail'
import ProjectRight from './project/ProjectRight'

function Homepage() {
  return (
    <section>
         <Sidebar />
         <div className='ms-[80px]'>
          <Header />
          <TopBar />

          <div className='px-4 py-4 flex gap-4'>
                <div className='w-3/4'>
                    <ProjectDetail />
                </div>
                <div className='w-1/4'>
                    <ProjectRight />
                </div>
          </div>
         </div>
    </section>
  )
}

export default Homepage