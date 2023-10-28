import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Range from "./Range";
import Password from "./Password";
import ButtonNewPassword from "./ButtonNewPassword";
import { passwordStrength } from "check-password-strength";
import Title from "./Title";
import TitleDescription from "./TitleDescription";
import { Layout } from "lucide-react";
import LayoutPassword from "./LayoutPassword";

function App() {
    // Initial state
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [pwStrength, setPwStrength] = useState("");
    const [strengthStyle, setStrengthStyle] = useState("bg-green-400");

    const lowercaseLetters = "abcdefghijklmnpqrstuvwxyz";
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    const checkPasswordStrength = (pw) => {
        const strength = passwordStrength(pw).value;
        handleColor(strength);
        return strength;
    };
    const handleColor = (strength) => {
        switch (strength) {
            case "Too weak":
                setStrengthStyle("bg-red-800");
                break;
            case "Weak":
                setStrengthStyle("bg-red-400");
                break;
            case "Medium":
                setStrengthStyle("bg-yellow-400");
                break;
            case "Strong":
                setStrengthStyle("bg-green-400");
                break;
            default:
                setStrengthStyle("bg-green-400");
        }
    };

    const generatePassword = () => {
        // Initialize password variable
        const characterList = [];
        let generatedPassword = "";

        // Add selected character types to characterList
        if (includeLowercase) {
            characterList.push(...lowercaseLetters);
        }
        if (includeUppercase) {
            characterList.push(...uppercaseLetters);
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

        checkPasswordStrength(generatedPassword);
        // Update password state
        setPassword(generatedPassword);
        // Update password strength state
        setPwStrength(checkPasswordStrength(generatedPassword));
    };

    useEffect(() => {
        if (
            !includeLowercase &&
            !includeUppercase &&
            !includeNumbers &&
            !includeSymbols
        ) {
            setIncludeLowercase(true);
        }
        generatePassword();
    }, [
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols,
    ]);

    return (
        <div>
            <Title>ReactPass</Title>
            <TitleDescription>A simple password generator 🔑</TitleDescription>
            <LayoutPassword>
                <Password password={password} strength={pwStrength} />
                <ButtonNewPassword generatePassword={generatePassword} />
            </LayoutPassword>

            <Range
                label="Length"
                value={length}
                setValue={setLength}
                min={2}
                max={60}
            />
            <Checkbox
                label="Include lowercase (a-z)"
                value={includeLowercase}
                setValue={setIncludeLowercase}
            />
            <Checkbox
                label="Include uppercase (A-Z)"
                value={includeUppercase}
                setValue={setIncludeUppercase}
            />
            <Checkbox
                label="Include Numbers (0-9)"
                value={includeNumbers}
                setValue={setIncludeNumbers}
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
