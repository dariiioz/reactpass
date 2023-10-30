import React from "react";
/**
 * Title component
 * @param {JSX.Element} children - Children components
 * @returns {JSX.Element} - Title component
 */

const Title = ({ children }) => {
    return (
        <h1 className="text-4xl font-bold text-center text-gray-800">
            {children}
        </h1>
    );
};

export default Title;
