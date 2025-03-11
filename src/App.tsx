import React, {useState} from "react";
import "../styles/styles.scss";
import Button from "./components/Button/Button.tsx";

const App: React.FC = () => {
    const [isAction, setIsAction] = useState(false); // Состояние загрузки


    // Action simulation
    const handleAction = async () => {
        setIsAction(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsAction(false);
    };

    return (
        <>
            <Button
                leftIcon='HandEye'
                rightIcon='Hand'
                onClick={handleAction}
                action={isAction}
                disabled
            >
                {isAction ? 'Loading...' : 'Text'}
            </Button>
        </>
    );
};

export default App;
