import Tabs from "./Tabs";
import React, { useState } from "react";
import PredictionSection from "./PredictionSection";
import RecommendationSection from "./RecommendationSection";
import { ReactComponent as GraphIcon } from "./arrow-graph.svg";

export const Page = () => {
  const [showRecommendation, setShowRecommendation] = useState(true);

  const toggleComponent = () => {
    setShowRecommendation(!showRecommendation);
  };

  return (
    <div className="flex relative justify-center items-stretch py-10 px-10 w-full max-w-screen-2xl mx-auto">
      <div>
        {!showRecommendation && (
          <div
            onClick={toggleComponent}
            className="absolute top-5 left-5 cursor-pointer flex items-center text-blue-700"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 2L3 9h4v6h6V9h4L10 2z" />
            </svg>
            <span>Back to Prediction Vs Recommendation</span>
          </div>
        )}
        <div className="flex relative justify-center items-stretch py-10 px-10 w-full max-w-screen-2xl mx-auto">
          <PredictionSection />
          {showRecommendation && (
            <div className="flex justify-center items-center absolute bg-[#d5dee5] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-28 h-28">
              <div className="flex justify-center items-center bg-[#ffffff] rounded-full w-24 h-24">
                <div>
                  <GraphIcon width="100px" height="100px" />
                </div>
              </div>
            </div>
          )}
          {showRecommendation ? (
            <RecommendationSection toggleComponent={toggleComponent} />
          ) : (
            <Tabs />
          )}
        </div>
      </div>
    </div>
  );
};
