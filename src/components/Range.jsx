import React from "react";

const Range = ({ label, value, setValue, min, max }) => {
    return (
        <div>
            <label className="label">
                {label} : {value}
            </label>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                className="range"
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Range;
