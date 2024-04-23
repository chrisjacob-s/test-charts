import { useState } from "react";
import "../css/tabs.css";
import { LuAlignCenter, LuPencil } from "react-icons/lu";
import {ReactComponent as Edit} from "../edit.svg"
import PayoutTable from "./PayoutTable";


export function TitleTabs() {
    const [toggleTitleButtons, setToggleTitleButtons] = useState(1);
    const titleButtons = (index) => {
        setToggleTitleButtons(index);
    }
    return (
        <div className="w-full h-full"  >
            <div className="border border-b-t border-[#D5DEE4] pb-2 p-1 flex justify-between w-full">
                <div className="flex flex-row">
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
                <div className="flex flex-row p-1 pt-1">
                    <p className="text-xs text-[#BEBEC6] pr-2">Edit Inputs as per recommendations to increase utilization</p>
                    <div >
                        <Edit/>
                    </div>
                </div>

            </div>
            <div className="flex w-full">
                <div className={toggleTitleButtons === 1 ? "active-inner" : "content"}>
                    {/*<div className="mt-3 ml-1 mb-3 justify-between flex w-full pl-3 pr-3 pt-0.5 pb-0.5">
                        <div className="gap-10 flex w-2/5 mr-2">
                            <p className="text-[#7C7C7E]">BOOKING RANGE</p>
                            <p className="text-[#7C7C7E]">PROVIDED</p>
                        </div>
                        <div className=" gap-3 flex w-1/2  justify-end">
                            <p className="bg-[#27AE60] bg-right pl-2 pr-2 text-white font-semibold">RECOMMENDED</p>
                            <p className="bg-[#27AE60] bg-right pl-2 pr-2 text-white font-semibold">POSSIBLE UTILIZATION</p>
                        </div>
                    </div>
    */} 
                <PayoutTable/>

                </div>
                <div className={toggleTitleButtons === 2 ? "active-inner" : "content"}>
                    <div className="mt-3 ml-1 mb-3 flex-col w-full pl-3 pr-3 pt-0.5 pb-0.5">
                        <div className="flex w-max mr-2 pt-4">
                            <p className="text-[#7C7C7E]">INCLUSIONS</p>
                        </div>
                        <div className="flex w-max mr-2 pt-4">
                            < p className="text-[#7C7C7E]">EXCLUSIONS</p>
                        </div>
                    </div>
                </div>
                <div className={toggleTitleButtons === 3 ? "active-inner" : "content"}>
                    <div className="mt-3 ml-1 mb-3 flex-col w-full pl-3 pr-3 pt-0.5 pb-0.5">
                        <div className="flex w-max mr-2 pt-4">
                            <p className="text-[#7C7C7E]">INCLUSIONS</p>
                        </div>
                        <div className="flex w-max mr-2 pt-4">
                            < p className="text-[#7C7C7E]">EXCLUSIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ROICOMPS() {
    return (
        <div className="flex w-full h-full">
            <div className="pl-2 w-1/3 h-full flex flex-col justify-start gap-10 mt-5 font-bold">
                <p className> Sales Projection</p>
                <p>Commision Rates</p>
                <p>Projected Revenue Growth</p>
            </div>
            <div className="pl-2 w-1/2 h-full flex flex-col justify-start gap-10 mt-5">
                <p>Dynamic Information</p>
                <p>Dynamic Informatino</p>
                <p>Dynamic Information</p>
            </div>


        </div>

    );
}





