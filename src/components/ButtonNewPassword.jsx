import React from "react";
import { RotateCcw } from "lucide-react";

const ButtonNewPassword = ({ generatePassword }) => {
    return (
        <button
            className="btn btn-primary btn-outline btn-sm"
            onClick={generatePassword}
        >
            <RotateCcw className="w-4 h-4 mr-2 hover:-rotate-45 hover:duration-200 " />
        </button>
    );
};

export default ButtonNewPassword;
