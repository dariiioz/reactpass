import React, { useEffect } from "react";
import { useState } from "react";

const StrenghtIndicator = ({ strength }) => {
    const [strengthDivStyle, setStrengthDivStyle] = useState("");
    const [strengthTextStyle, setStrengthTextStyle] = useState("Too weak");
    useEffect(() => {
        switch (strength) {
            case "Too weak":
                setStrengthDivStyle("bg-red-800 w-1/6 h-full");
                setStrengthTextStyle("text-red-800 font-semibold");
                break;
            case "Weak":
                setStrengthDivStyle("bg-red-400 w-2/6 h-full");
                setStrengthTextStyle("text-red-400 font-semibold");
                break;
            case "Medium":
                setStrengthDivStyle("bg-yellow-400 w-3/6 h-full");
                setStrengthTextStyle("text-yellow-400 font-semibold");
                break;
            case "Strong":
                setStrengthDivStyle("bg-green-600 w-full h-full");
                setStrengthTextStyle("text-green-600 font-semibold");
                break;
            default:
                setStrengthDivStyle("bg-green-600 w-full h-full");
                setStrengthTextStyle("text-green-600 font-semibold");
        }
    }, [strength]);
    return (
        <div>
            <div className="h-2 w-full bg-gray-300 mt-2 rounded-full overflow-hidden">
                <div className={strengthDivStyle} />
            </div>
            <div className="flex justify-between mt-2">
                <span className={strengthTextStyle}>{strength}</span>
            </div>
        </div>
    );
};

export default StrenghtIndicator;
