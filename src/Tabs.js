import { useState } from "react";
import { TitleTabs } from "./InnerTabComponents/RecComps";
import "./css/tabs.css";

function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(index);
    }


    return (
        <div className="container">

            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >Recommendation</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >ROI</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >Graph</div>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <TitleTabs />
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <h2>Add Data 2</h2>
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    <h2>Add Data 3</h2>
                </div>
            </div>
        </div>

    )
}

export default Tabs;