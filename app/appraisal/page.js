import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header' 
import AppraisalTopbar from './AppraisalTopbar'
import AppraisalHeader from './AppraisalHeader'
import AppraisalList from './AppraisalList'

function page() {
  return (
    <section>
    <Sidebar />
    <div className='ms-[80px]'>
     <AppraisalHeader />
     <AppraisalTopbar />

     <div className='px-4 pb-4 pt-0 flex gap-4'>
           <div className='w-full'>
               <AppraisalList />
           </div>
          
     </div>
     
    </div>
</section>
  )
}

export default page