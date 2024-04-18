import { useState } from "react";
import "../css/tabs.css";


export function TitleTabs() {
    const [toggleTitleButtons, setToggleTitleButtons] = useState(1);
    const titleButtons = (index) => {
        setToggleTitleButtons(index);
    }
    return (
        <div className="bg-white min-w-full"  >
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
        <div className="content-tabs">
        <div className={toggleTitleButtons === 1 ? "active-content" : "content"}>
            <h2>Add Data 1</h2>
        </div>
        <div className={toggleTitleButtons=== 2 ? "active-content" : "content"}>
            <h2>Add Data 2</h2>
        </div>
        <div className={toggleTitleButtons === 3 ? "active-content" : "content"}>
            <h2>Add Data 3</h2>
        </div>
    </div>
</div>
    )
}





