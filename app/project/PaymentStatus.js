import React from "react";

function PaymentStatus() {
  return (
    <div className="p-4 rounded-[10px] bg-[#d9d9d903] border border-[#ffffff1a] h-full">
      <h2 className="font-semibold text-[14px] mb-8">Payment Status</h2>
      <div className="flex items-end border-b border-[#ffffff1a]">
        <div className="w-13 ms-5 staus_card relative bg-gradient-to-t from-[#543F09] to-[#EAAB08] min-h-[250px] rounded-t-[10px] submitted_shadow">
          <div className="submiteHover">
             <h6 className="text-[#BBBBBB] text-small font-medium">Submitted</h6>
             <p className="text-white font-bold text-small">456,487</p>
          </div>
        </div>
        <div className="w-13  staus_card relative ms-5 bg-gradient-to-t from-[#073C21] to-[#00A653] h-[200px] rounded-t-[10px] recieve_shadow">
        <div className="submiteHover">
             <h6 className="text-[#BBBBBB] text-small font-medium">Received</h6>
             <p className="text-white font-bold text-small">321,487</p>
          </div>
        </div>
        <div className="ms-14">
          <div className="flex items-center mb-1">
            <span className="w-[11px] h-[11px] flex me-2 submit_icon"></span>
            <p className="text-[14px]">Submitted</p>
          </div>
          <div className="flex items-center mb-4">
            <span className="w-[11px] h-[11px] flex me-2 recived_icon"></span>
            <p className="text-[14px]">Received</p>
          </div>
        </div>
      </div>
      <div className="flex text-small text-center mt-1 mb-2">
        <div className="ms-5 w-13 ">456,487</div>
        <div className="ms-5 w-13">321,487</div>
      </div>
    </div>
  );
}

export default PaymentStatus;
