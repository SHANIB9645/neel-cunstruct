import React from 'react'

function PaymentCard() {
  return (
    <div className="mt-4 ">
    <div className="bg_lightgrey rounded-[10px]  py-4  border border-[#ffffff1a]">
     
      <div className="flex px-2 items-center justify-between mb-4">
        <div className="text-center w-[55%] ">
          <h5 className="text-[#FFFFFFCC] text-[11px] font-medium mb-2">
          Payment Submitted
          </h5>
          <p className="text-[16px] font-semibold text-[#3B82F6] ">
          1300,000,000
          </p>
        </div>
        <div className="text-center w-[45%] border-l border-[#ffffff1a] ">
          <h5 className="text-[#FFFFFFCC] text-[11px] font-medium mb-2">
          Payment Received
          </h5>
          <p className="text-[16px] font-semibold text-[#00A653]">
          124,300,180
          </p>
        </div>
      </div>
      <div className="text-center mx-3 border-t border-[#ffffff1a] pt-3">
        <h5 className="text-[#FFFFFFCC] text-[11px] font-medium">
        Payment to be Received
        </h5>
        <p className="text-[22px] font-semibold text-[#D29911]">
        136,816,163
        </p>
      </div>
    </div>
  </div>
  )
}

export default PaymentCard