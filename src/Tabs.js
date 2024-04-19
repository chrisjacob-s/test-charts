import { useState } from "react";
import { ROICOMPS, TitleTabs } from "./InnerTabComponents/InteriorComps";
import RechartsBarGraph from "./RechartsBarGraph";
import "./css/tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container h-2/3 ">
      <div className="bloc-tabs mb-2">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Recommendation
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          ROI
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Graph
        </div>
      </div>
      <div className="flex h-full">
        {toggleState === 1 && (
          <div className="active-content">
            <TitleTabs />
          </div>
        )}
        {toggleState === 2 && (
          <div className="active-content">
            <ROICOMPS />
          </div>
        )}
        {toggleState === 3 && (
          <div className="active-content">
            <RechartsBarGraph />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
