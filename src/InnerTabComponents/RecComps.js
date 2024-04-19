import { useState } from "react";
import "../css/tabs.css";


export function TitleTabs() {
    const [toggleTitleButtons, setToggleTitleButtons] = useState(1);
    const titleButtons = (index) => {
        setToggleTitleButtons(index);
    }
    return (
        <div className="min-w-full"  >
            <div className="bloc-tabs">
                <div className={toggleTitleButtons === 1 ? "inner-tabs active-tabs inner-active" : "inner-tabs"}
                    onClick={() => titleButtons(1)}
                >Payout</div>
                <div className={toggleTitleButtons === 2 ? "inner-tabs active-tabs inner-active" : "inner-tabs"}
                    onClick={() => titleButtons(2)}
                >Products</div>
                <div className={toggleTitleButtons === 3 ? "inner-tabs active-tabs inner-active" : "inner-tabs"}
                    onClick={() => titleButtons(3)}
                >Partners</div>
            </div>
        <div className = "flex">
        <div className={toggleTitleButtons === 1 ? "active-inner" : "content"}>
            <div className = "mt-3 ml-1 mb-3 justify-between flex w-full pl-3 pr-3 pt-0.5 pb-0.5">
                <div className = "gap-10 flex w-2/5 mr-2">
                    <p className = "text-[#7C7C7E]">BOOKING RANGE</p>
                    <p className = "text-[#7C7C7E]">PROVIDED</p>
                </div>
                <div className = " gap-3 flex w-3/5  justify-end">
                    <p className = "bg-[#27AE60] bg-right pl-2 pr-2 text-white font-semibold">RECOMMENDED</p>
                    <p className= "bg-[#27AE60] bg-right pl-2 pr-2 text-white font-semibold">POSSIBLE UTILIZATION</p>
                </div>
            </div>
        </div>
        <div className={toggleTitleButtons=== 2 ? "active-inner" : "content"}>
            <h2>Add Data 2</h2>
        </div>
        <div className={toggleTitleButtons === 3 ? "active-inner" : "content"}>
            <h2>Add Data 3</h2>
        </div>
    </div>
</div>
    )
}





