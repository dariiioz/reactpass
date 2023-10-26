import React from "react";

const TitleDescription = ({ children }) => {
    return (
        <h2 className="text-2xl font-bold text-center text-gray-800">
            {children}
        </h2>
    );
};

export default TitleDescription;
