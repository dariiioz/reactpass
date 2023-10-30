import React from "react";

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
