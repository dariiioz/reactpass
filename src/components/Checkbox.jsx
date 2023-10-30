import React from "react";
/**
 * Checkbox component
 * @param {string} label - Checkbox label
 * @param {boolean} value - Checkbox value
 * @param {function} setValue - Checkbox value setter
 * @param {boolean} disabled - Checkbox disabled
 * @returns {JSX.Element} - Checkbox component
 *
 */

const Checkbox = ({ label, value, setValue, disabled = false }) => {
    const handleChange = () => {
        setValue(!value);
    };
    return (
        <div className="form-control">
            <label className="inline-flex items-center ">
                <input
                    type="checkbox"
                    checked={value}
                    className="checkbox checkbox-sm ml-4 "
                    onClick={handleChange}
                    disabled={disabled}
                />
                <span className="ml-1 text-gray-700">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
