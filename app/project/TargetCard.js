import React from "react";

function TargetCard() {
  return (
    <div className="mt-4 ">
      <div className="targetCrd py-4  border border-[#ffffff1a]">
        <div className="text-center mx-3 border-b border-[#ffffff1a] pb-3">
          <h5 className="text-[#FFFFFFCC] text-[15px] font-medium">
            Project Target Value
          </h5>
          <p className="text-[22px] font-semibold text-[#00A653]">
            136,816,163
          </p>
        </div>
        <div className="flex px-2 items-center justify-between mt-4">
          <div className="text-center w-[55%] ">
            <h5 className="text-[#FFFFFFCC] text-[11px] font-medium mb-2">
              Total Cumulative Cost To Date
            </h5>
            <p className="text-[16px] font-semibold text-[#ffffff] ">
              1300,000,000
            </p>
          </div>
          <div className="text-center w-[45%] border-l border-[#ffffff1a] ">
            <h5 className="text-[#FFFFFFCC] text-[11px] font-medium mb-2">
            Current Month Cost
            </h5>
            <p className="text-[16px] font-semibold text-[#B41010]">
            124,300,180
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetCard;
