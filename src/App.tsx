import React, {useEffect, useState} from "react";
import "../styles/styles.scss";
import Button from "./components/Button/Button.tsx";

const App: React.FC = () => {
    const [theme, setTheme] = useState('light');
    const [back, setBack] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.setAttribute('theme', savedTheme);

        const savedBack = localStorage.getItem('back') || 'light';
        setBack(savedBack);
        document.body.setAttribute('back', savedBack);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.setAttribute('theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleBack = () => {
        const newBack = back === 'light' ? 'dark' : 'light';
        setBack(newBack);
        document.body.setAttribute('back', newBack);
        localStorage.setItem('back', newBack);
    };

    return (
        <>
            <Button
                onClick={toggleTheme}
                leftIcon='HandEye'
                rightIcon='Hand'
                variant='success'
                view='tone'
            >
                Text
            </Button>

            <br /><br /><br />

            <Button
                onClick={toggleBack}
            >
                Back
            </Button>
        </>
    );
};

export default App;
