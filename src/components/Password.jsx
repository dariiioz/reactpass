import React from "react";
import { useEffect, useState } from "react";

const Password = ({ password, strength }) => {
    const [style, setStyle] = useState("text-green-500");

    useEffect(() => {
        if (strength === "Weak") {
            setStyle("input input-bordered w-full max-w-xs input-error");
        } else if (strength === "Medium") {
            setStyle("input input-bordered w-full max-w-xs input-warning");
        } else if (strength === "Strong") {
            setStyle("input input-bordered w-full max-w-xs input-success");
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
