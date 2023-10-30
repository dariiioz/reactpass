import React from "react";
import { RotateCcw } from "lucide-react";

/**
 * ButtonNewPassword component
 * @param {function} generatePassword - Generate password function
 * @returns {JSX.Element} - ButtonNewPassword component
 */

const ButtonNewPassword = ({ generatePassword }) => {
    return (
        <button
            className="w-full mt-4 btn btn-sm bg-slate-900 hover:bg-slate-800 rounded-md"
            onClick={generatePassword}
        >
            <RotateCcw className="w-4 h-4 mr-2 hover:-rotate-45 hover:duration-200 " />
            Generate New Password
        </button>
    );
};

export default ButtonNewPassword;
