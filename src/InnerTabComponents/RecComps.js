import { useState } from "react";
import "../css/tabs.css";


export function TitleTabs() {
    const [toggleTitleButtons, setToggleTitleButtons] = useState(1);
    const titleButtons = (index) => {
        setToggleTitleButtons(index);
    }
    return (
        <div className="container-title">
            <div className="bloc-tabs">
                <div className={toggleTitleButtons === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => titleButtons(1)}
                >Payout</div>
                <div className={toggleTitleButtons === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => titleButtons(2)}
                >Products</div>
                <div className={toggleTitleButtons === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => titleButtons(3)}
                >Partners</div>
            </div>
        </div>
    )
}





