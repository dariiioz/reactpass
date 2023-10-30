import React from "react";

/**
 * Range component
 * @param {number} value - Range value
 * @param {function} setValue - Range value setter
 * @param {number} min - Range min value
 * @param {number} max - Range max value
 * @returns {JSX.Element} - Range component
 */

const Range = ({ value, setValue, min, max }) => {
    return (
        <div>
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
