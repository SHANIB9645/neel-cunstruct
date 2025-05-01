import React from 'react'

function ProjectInformation() {
  return (
    <div className='px-4 py-4'>
        <ul className='border-b border-[#3F44504D] pb-4'>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px] w-[250px] '>Contract Number</div>
                <p className='text-[15px] font-medium'>PD/CA/BPS/MW/R532/P311-2017-56790/19/102 <span className='text-[13px] px-2 py-1 rounded-[30px] font-medium bg-gradient-to-r from-[#16B364] to-[#2E7D32] ms-2'>Ongoing</span></p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px] w-[250px] '>NC Project Name</div>
                <p className='text-[15px] font-medium'>NC833</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Client Name</div>
                <p className='text-[15px] font-medium'>Alami</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Consultant</div>
                <p className='text-[15px] font-medium'>Altorath International Engineering Consultants LLC</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Project Manager</div>
                <p className='text-[15px] font-medium'>Sajan Jacob</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Location</div>
                <p className='text-[15px] font-medium'>Rema</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Project Type</div>
                <p className='text-[15px] font-medium'>Infrastructural</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>Duration</div>
                <p className='text-[15px] font-medium'>24 Feb 2023 - 20 Mar 2024 <span className='text-[#979797] text-small ms-1'>(1 year & 1 month)</span></p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px] w-[250px]'>Estimated Completion Date</div>
                <p className='text-[15px] font-medium'>20 Mar 2024</p>
            </li>
            <li className='flex items-start mb-4 '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] '>TOC Date</div>
                <p className='text-[15px] font-medium'>22 Mar 2024 </p>
            </li>
            <li className='flex items-start   '>
                <div className='text-[#FFFFFF80] text-[15px]  w-[250px] shrink-0'>Description</div>
                <p className='text-[15px] font-medium'>This Project Focusing On Developing Infrastructure to support urban growth. Emphasizing sustainability and efficiency. it includes the construction of utilities, transportation network</p>
            </li>
        </ul>
    </div>
  )
}

export default ProjectInformation