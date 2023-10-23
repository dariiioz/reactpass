import React, { useState, useEffect } from "react";

function App() {
    // Initial state
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(16);
    const [includeLetters, setIncludeLetters] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);


    const GeneratePassword = (e) => {
    };

    return (
        <div>
            <h1>ReactPass</h1>
            <h2> Genere a secure password !</h2>
        </div>
    );
}

export default App;
