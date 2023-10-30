import React from "react";
/*
 * TitleDescription component
 * @param {JSX.Element} children - Children components
 * @returns {JSX.Element} - TitleDescription component
 */

const TitleDescription = ({ children }) => {
    return (
        <h2 className="text-2xl font-bold text-center text-gray-800">
            {children}
        </h2>
    );
};

export default TitleDescription;
