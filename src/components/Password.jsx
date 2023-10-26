import React from "react";
import { useEffect, useState } from "react";

const Password = ({ password, strength, children }) => {
    const [style, setStyle] = useState("input input-bordered ");
    useEffect(() => {
        switch (strength) {
            case "Too weak":
                setStyle(
                    "input input-bordered  border-b-4 border-red-800  text-center font-bold"
                );
                break;
            case "Weak":
                setStyle(
                    "input input-bordered border-b-4 border-red-400 text-center font-bold"
                );
                break;
            case "Medium":
                setStyle(
                    "input input-bordered  border-b-4 border-yellow-600 text-center font-bold"
                );
                break;
            case "Strong":
                setStyle(
                    "input input-bordered border-b-4 border-green-800  text-center font-bold focus:outline-none"
                );
                break;
            default:
                setStyle(
                    "input input-bordered  border-b-4 border-green-800 text-center font-bold"
                );
        }
    });

    return (
        <input
            type="text"
            value={password}
            className={style}
            id="inputPassword"
        />
    );
};

export default Password;
