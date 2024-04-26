import { useEffect, useState } from "react";
function UseEffect() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    let incremntCount = () => {
        setCount(count + 1);
    }
    let handleChange = (e) => {
        setText(e.target.value);
    }

    // Syntax for useEffect
    // Component Mounting, Component Updating, Component Unmounting
    // useEffect(() => {
    //     console.log("This is UseEffect");
    //     document.title = `button clicked ${count} times`;
    // })

    useEffect(() => {
        console.log("This is UseEffect");
        document.title = `button clicked ${count} times`;
    },[count])

    return(
        <div>
            <h1>This is My count Value : {count}</h1>
            <input type="text" value={text} onChange={handleChange}/>
            <h2>{text}</h2>
            <button onClick={incremntCount}>Increment</button>
        </div>
    )
}

export default UseEffect;