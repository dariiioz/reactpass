import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Range from "./Range";
import Password from "./Password";
import ButtonNewPassword from "./ButtonNewPassword";

function App() {
    // Initial state
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(16);
    const [includeLetters, setIncludeLetters] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState("Strong");

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    const generatePassword = () => {
        // Initialize password variable
        const characterList = [];
        let generatedPassword = "";

        // Add selected character types to characterList
        if (includeLetters) {
            characterList.push(...letters);
        }
        if (includeNumbers) {
            characterList.push(...numbers);
        }
        if (includeSymbols) {
            characterList.push(...symbols);
        }

        // Generate random password
        for (let i = 0; i < length; i++) {
            const characterIndex = Math.floor(
                Math.random() * characterList.length
            );
            generatedPassword += characterList[characterIndex];
        }
        // Verify if password contains selected character types
        const verifPassword = verifyParams(generatedPassword);
        if (!verifPassword) {
            generatePassword();
        }
        console.log("Good password");
        setPassword(generatedPassword);
    };

    const verifyParams = (password) => {
        if (includeLetters && includeNumbers && includeSymbols) {
            // Vérifier la présence d'au moins un nombre
            const hasNumber = /\d/.test(password);

            // Vérifier la présence d'au moins un symbole
            const hasSymbol = /[!@#$%^&*]/.test(password);
            if (hasNumber && hasSymbol) {
                return true;
            }
        }
        if (includeLetters && includeNumbers && !includeSymbols) {
            // Vérifier la présence d'au moins un nombre
            const hasNumber = /\d/.test(password);
            if (hasNumber) {
                return true;
            }
        }
        if (includeLetters && !includeNumbers && includeSymbols) {
            // Vérifier la présence d'au moins un symbole
            const hasSymbol = /[!@#$%^&*]/.test(password);
            if (hasSymbol) {
                return true;
            }
        }
    };

    useEffect(() => {
        generatePassword();
        if (includeLetters == false) {
            setIncludeNumbers(true);
        }
    }, [length, includeLetters, includeNumbers, includeSymbols]);

    return (
        <div className="bg-base-300">
            <h1>ReactPass</h1>
            <h2> Genere a secure password !</h2>
            <Password password={password} strength={passwordStrength} />
            <ButtonNewPassword generatePassword={generatePassword} />
            <Range
                label="Length"
                value={length}
                setValue={setLength}
                min={2}
                max={60}
            />
            <Checkbox
                label="Include Letters (a-z, A-Z)"
                value={includeLetters}
                setValue={setIncludeLetters}
            />
            <Checkbox
                label="Include Numbers (0-9)"
                value={includeNumbers}
                setValue={setIncludeNumbers}
                disabled={!includeLetters}
            />
            <Checkbox
                label="Include Symbols (!@#$%^&*)"
                value={includeSymbols}
                setValue={setIncludeSymbols}
            />
        </div>
    );
}

export default App;
