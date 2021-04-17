import React from "react";

function HistoryItem({className, onClick, text, index}) {
    return (
        <li>
            <button
                className={className}
                onClick={() => onClick(index)}
            >
                {text}
            </button>
        </li>
    )
}

export default HistoryItem;