import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Range from "./Range";
import Password from "./Password";
import ButtonNewPassword from "./ButtonNewPassword";
import { passwordStrength } from "check-password-strength";
import Title from "./Title";
import TitleDescription from "./TitleDescription";
import StrenghtIndicator from "./StrenghtIndicator";
import Footer from "./Footer";

function App() {
    // Initial state
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [pwStrength, setPwStrength] = useState("");

    const lowercaseLetters = "abcdefghijklmnpqrstuvwxyz";
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    const checkPasswordStrength = (pw) => {
        const strength = passwordStrength(pw).value;
        return strength;
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
            <div className=" bg-gray-200  rounded-md shadow-xl xl:mx-44 xl:mt-36 sm:m-4 p-8 ">
                <Title>ReactPass</Title>
                <TitleDescription>
                    A simple password generator 🔑
                </TitleDescription>
                <Password password={password} strength={pwStrength} />
                <ButtonNewPassword generatePassword={generatePassword} />

                <div className="text-lg font-semibold mt-4">
                    Password Strength
                </div>
                <StrenghtIndicator strength={pwStrength} />
                <div className=" mt-4 rounded-sm">
                    <div className="text-lg font-semibold">
                        <p>Customize Your Password</p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <div className="flex flex-col sm:flex-row">
                            <Checkbox
                                label="Lowercase (a-z)"
                                value={includeLowercase}
                                setValue={setIncludeLowercase}
                            />
                            <Checkbox
                                label="Uppercase (A-Z)"
                                value={includeUppercase}
                                setValue={setIncludeUppercase}
                            />
                            <Checkbox
                                label="Numbers (0-9)"
                                value={includeNumbers}
                                setValue={setIncludeNumbers}
                            />
                            <Checkbox
                                label="Symbols (!@#$%^&*)"
                                value={includeSymbols}
                                setValue={setIncludeSymbols}
                            />
                        </div>
                    </div>
                    <div className="text-lg font-semibold mt-4">
                        <p>Password Length : {length}</p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
