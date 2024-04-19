import React from 'react';
import MUICircularProgress from "./MUICircularProgress";

const RecommendationSection = ({ toggleComponent }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#edf6fb] p-9 px-24 rounded-lg ml-8 w-5/12">
      <h1 className="text-lg text-[#384e09] text-center font-bold uppercase -mt-5">
        Recommendation
      </h1>
      <p className="text-center pb-3">Increase up to 95%</p>
      <p className="text-center">
        Based on your promotion requirements we have provided some suggested
        changes below to help you achieve a higher level of participation.
      </p>
      <div className="flex flex-col justify-center items-center px-8 pt-3 pb-8">
        <MUICircularProgress color="#27ae60" percentage={95} />
      </div>
      <button onClick={toggleComponent} className="bg-[#80c45b] text-white rounded-md px-4 py-2 -mb-6 block mx-auto">
        Switch to Tabs &gt;
      </button>
    </div>
  );
};

export default RecommendationSection;
