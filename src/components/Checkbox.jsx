import React from "react";

const Checkbox = ({ label, isSelected, setBoolean }) => (
    <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">{label}</span>
            <input
                type="checkbox"
                checked={isSelected}
                className="checkbox"
                onChange={() => setBoolean(!isSelected)}
            />
        </label>
    </div>
);

export default Checkbox;
