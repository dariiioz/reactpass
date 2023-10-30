import React from "react";
import { useEffect, useState } from "react";

const Password = ({ password }) => {
    return (
        <input
            type="text"
            value={password}
            className="font-bold mb-1 p-2 w-full border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-center"
            id="inputPassword"
        />
    );
};

export default Password;
