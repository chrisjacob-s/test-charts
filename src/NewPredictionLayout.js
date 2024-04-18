import React from "react";
import PredictionSection from "./PredictionSection";
import RecommendationSection from "./RecommendationSection";

import { ReactComponent as GraphIcon } from "./arrow-graph.svg";

const NewPredictionLayout = () => {
  return (
    <div className="flex relative justify-center items-stretch bg-gray-200 py-10 px-10 w-full max-w-screen-2xl mx-auto">
      {/* Prediction Container */}
      <PredictionSection />
      {/* Icon Circle */}
      <div className="flex justify-center items-center absolute bg-[#dbeafe] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 w-32 h-32">
        <div className="flex justify-center items-center bg-[#ffffff] rounded-full p-10 w-24 h-24">
          <div>
            <GraphIcon width="100px" height="100px"/>
          </div>
        </div>
      </div>
      {/* Recommendation Container */}
      <RecommendationSection/>
     
    </div>
  );
};

export default NewPredictionLayout;
