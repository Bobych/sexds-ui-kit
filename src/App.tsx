import React from "react";
import "../styles/styles.scss";
import Button from "./components/Button/Button.tsx";

const App: React.FC = () => {
    return (
        <>
            <Button
                leftIcon='HandEye'
                rightIcon='Hand'
                href='https://sportexclub.com'
                disabled
            >
                Text
            </Button>
        </>
    );
};

export default App;
