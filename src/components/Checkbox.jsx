import React from "react";

const Checkbox = ({ label, value, setValue, disabled = false }) => {
    const handleChange = () => {
        setValue(!value);
    };
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input
                    type="checkbox"
                    checked={value}
                    className="checkbox"
                    onClick={handleChange}
                    disabled={disabled}
                />
            </label>
        </div>
    );
};

export default Checkbox;
