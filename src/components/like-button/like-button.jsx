import { useState } from "react";


const LikeButton = (props) => {

    const [count, setCount] = useState(42);

    const handleClick = () => {
        setCount(count => count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}> 
                ♥ {count}
            </button> 
        </div>
    );
}

export default LikeButton;