import { useState } from "react";
import { ROICOMPS, TitleTabs } from "./InnerTabComponents/InteriorComps";
import RechartsBarGraph from "./RechartsBarGraph";
import "./css/tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
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
        <div className={toggleState === 1 ? "active-content" : "content"}>
          <TitleTabs />
        </div>
        <div className={toggleState === 2 ? "active-content" : "content"}>
          <ROICOMPS />
        </div>
        <div className={toggleState === 3 ? "active-content" : "content"}>
          <RechartsBarGraph />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
