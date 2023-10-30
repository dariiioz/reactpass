import React from "react";
/*
 * LayoutPassword component
 * @param {JSX.Element} children - Children components
 * @returns {JSX.Element} - LayoutPassword component
 */

const LayoutPassword = ({ children }) => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 gap-4 mx-80">
            {children}
        </div>
    );
};

export default LayoutPassword;
