import React from "react";
import MUICircularProgress from "./MUICircularProgress";

const PredictionSection = () => {
  return (
    <div className="bg-[#fcf9d9] py-9 px-5 rounded-lg relative w-[32rem] h-[32rem]">
      <h1 className="text-lg text-[#384e09] text-center font-bold uppercase -mt-5 mb-3">
        Prediction
      </h1>
      <div className="grid grid-cols-3 gap-10 h-full">
        <div className="flex flex-col justify-between items-center">
          <div>
            <p className="text-lg">$115,000</p>
            <p className="text-sm">Budget Utilized</p>
          </div>
          <div className="mt-auto">
            <p className="text-lg">$1,230,000</p>
            <p className="text-sm">Sales Booking</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-8">
          <MUICircularProgress color="#ffad4c" percentage={65} />
          <h2 className="text-lg text-center mt-2 w-36">Budget Utilization</h2>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div>
            <p className="text-lg">R 75,000</p>
            <p className="text-sm">Points Rewarded</p>
          </div>
          <div className="mt-auto">
            <p className="text-lg">215</p>
            <p className="text-sm"># of Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionSection;