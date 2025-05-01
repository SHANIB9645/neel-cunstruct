import React from 'react'

function CostStatus() {
  return (
    <div className="p-4 rounded-[10px] bg-[#d9d9d903] border border-[#ffffff1a]   mt-4">
    <h2 className="font-semibold text-[14px] mb-8">Cost Status</h2>
    <div className="flex items-end border-b border-[#ffffff1a]">
      <div className="w-13 ms-5 bg-gradient-to-t from-[#430C08] to-[#D6261A] min-h-[250px] rounded-t-[10px] cost_shadow" ></div>
      <div className="w-13  ms-5  ">
        <div className='w-full relative  flex items-center  bg-gradient-to-t from-[#073C21] to-[#00DC6E] h-[46px] rounded-[10px] mb-1   recieve_shadow'>
            <div className='absolute right-[-110%]'>
                <h6 className='text-[10px] text-[#bbb] uppercase font-medium'>Profit</h6>
                <p className='text-small font-semibold'>45,248</p>
            </div>
        </div>
        <div className='w-full bg-gradient-to-t from-[#543F09] to-[#EAAB08] h-[200px] rounded-t-[10px]   submitted_shadow'></div>
      </div>
      <div className="ms-14">
         
          <div className="flex items-center mb-1">
              <span className="w-[11px] h-[11px] flex me-2 recived_icon"></span>
              <p className="text-[14px]">Profit</p>
          </div>
          <div className="flex items-center mb-1">
              <span className="w-[11px] h-[11px] flex me-2 budget_icon"></span>
              <p className="text-[14px]">Budget</p>
          </div>
          <div className="flex items-center mb-4">
              <span className="w-[11px] h-[11px] flex me-2 submit_icon"></span>
              <p className="text-[14px]">Actual</p>
          </div>
      </div>
    </div>
    <div className="flex text-small text-center mt-1 mb-2">
       <div className="ms-5 w-13 ">456,487</div>
       <div className="ms-5 w-13">321,487</div>
    </div>
  </div>
  )
}

export default CostStatus