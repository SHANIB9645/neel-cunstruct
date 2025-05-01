import Image from 'next/image'
import React from 'react'

function ContractValue() {
  return (
    <div className='border border-[#00a65317] rounded-[10px] value_card p-4 relative'>
        <h5 className='text-[#FFFFFFCC] text-[15px] font-medium'>Contract Value</h5>
        <p className='text-[22px] font-semibold text-[#00A653]'>136,816,163</p>
        <Image src="/value.png" alt="Contract Value" width={200} height={200} className='absolute right-0 bottom-0 h-[95%] w-auto  ' />
    </div>
  )
}

export default ContractValue