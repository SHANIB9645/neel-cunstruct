import React from 'react'
import ProjectInformation from './ProjectInformation'
import PaymentStatus from './PaymentStatus'
import OverallExpense from './OverallExpense'
import IncomeChart from './IncomeChart'

function ProjectDetail() {
  return (
    <div className='border border-[#ffffff1a] backdrop-blur-[17] rounded-[5px] bg_gradiant_main relative'>
        <div className='absolute radial_div  w-[190px] aspect-square right-20  top-20 bg-[#00A653]'></div>     
        <div className='flex gap-10 items-center px-2 py-2 border-b border-[#ffffff1a] '>
                <div className='text-white text-small font-semibold uppercase bg-[#00A653] green_shadow border cursor-pointer border-[#00A653] rounded-[5px] px-3 py-2'>Project Info</div>
                <div className='text-[#878787] text-small font-semibold uppercase cursor-pointer'>Expenditure Status</div>
                <div className='text-[#878787] text-small font-semibold uppercase cursor-pointer'>Income vs Expenditure</div>
                <div className='text-[#878787] text-small font-semibold uppercase cursor-pointer'>Payment</div>
                <div className='text-[#878787] text-small font-semibold uppercase cursor-pointer'>Note</div>
                <div className='text-[#878787] text-small font-semibold uppercase cursor-pointer'>BOQ</div>
        </div>
        <div className=' '>
           <ProjectInformation />
        </div> 
        <div className='flex gap-4 px-4 pb-4'>
            <div className=' '>
             <PaymentStatus />  
            </div>
            <div className=' w-full'>
             <OverallExpense /> 
              
            </div>
        </div>
        <div className='px-4 pb-4'>
            <IncomeChart />
        </div>
    </div>
  )
}

export default ProjectDetail