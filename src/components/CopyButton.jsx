import React from "react";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const CopyButton = ({ password }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        toast.success("Password copied", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
    };
    return (
        <button
            className="absolute right-0 top-0 mt-3 mr-2 btn btn-sm btn-ghost rounded-md"
            onClick={handleCopy}
        >
            <Copy className="w-4 h-4" />
        </button>
    );
};

export default CopyButton;
