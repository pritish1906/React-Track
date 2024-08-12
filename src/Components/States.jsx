import React, { useState } from 'react'

const States = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);
    const [color, setColor] = useState(0);
    return (
        <div>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <div>
                <input type='text' onChange={(e) => setText(e.target.value)} />
                <p>{text}</p>
            </div>

            <div>
                <button onClick={() => setShow(!show)}>Toggle Show/Hide</button>
                {show && <p>Hey, this is the text we will toggle...</p>}
            </div>

            <div>
                <button onClick={() => setColor((color + 1) % 4)}>Change Color</button>
                <p style={{color:colors[color]}}>this text will change color</p>
            </div>
        </div>
    )
}

export default States