import NewPredictionLayout from "./NewPredictionLayout";
import Tabs from "./Tabs";
import { useState } from "react";
import PredictionSection from "./PredictionSection";

export const Page = () => {
    const [isToggleData, setToggleData] = useState(false);

    const toggleData = () => {
        setToggleData(!isToggleData);
    }

    return (
        <div className="flex relative justify-center items-stretch bg-gray-200 py-10 px-10 w-full max-w-screen-2xl mx-auto">

            {isToggleData === true ? <NewPredictionLayout /> :
                <div className="flex relative justify-evenly">
                    <>
                        <PredictionSection />
                    </>
                    <>
                        <Tabs />
                    </>

                </div>

            }
        </div>
    )

}