'use client';
import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'Planning', label: 'Planning' },
    { value: 'All', label: 'All' },
    { value: 'Non-Engineering', label: 'Non - Engineering' },
    { value: 'AboveAverage', label: 'Above Average' },
    { value: 'Efficient', label: 'Efficient' },
    { value: 'Committed', label: 'Committed' }
  ]
  
function AppraisalTopbar() {
  return (
    <div className='px-4 pt-2'>
        <div className='flex flex-wrap'>
            <div className='me-2 mb-4'>
                <input type='text' placeholder='Search' className='h-[38px] px-2 text-[14px] w-[150px]  rounded  border border-[#2F2F2F]' />
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Division</label>
            <Select className=''
            defaultValue={options[0]}
            options={options} />
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Project</label>
            <Select className=''
            defaultValue={options[1]}
            options={options} 
            //    menuIsOpen={true} 
            />
            
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Category</label>
            <Select className=''
            defaultValue={options[2]}
            options={options} />
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Behaviour</label>
            <Select className=''
            defaultValue={options[3]}
            options={options} />
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Efficiency</label>
            <Select className=''
            defaultValue={options[4]}
            options={options} />
            </div>
            <div className='me-2 mb-4 relative'>
                <label className='absolute left-4 top-[-5px] text-[8px] bg-black z-[9] text-[#FFFFFF59] uppercase px-2'>Dedication to Work</label>
            <Select className=''
            defaultValue={options[5]}
            options={options} />
            </div>
            <div className='me-2 mb-4 relative'>
                <div className='text-[#00A653] px-2 py-2 rounded border border-[#003219] text-[14px] '><span className='me-2'>&times;</span>Clear Filter</div>
            </div>
        </div>
    </div>
  )
}

export default AppraisalTopbar