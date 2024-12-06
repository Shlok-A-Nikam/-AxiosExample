import React, { useState } from "react";

const Conditional = () => {
    const [show, setShow] = useState(true);

    function setMessage() {
        if (show) {
            return <p> This is if message Para. </p>;
        } else {
            return <p> This is else message Para. </p>;
        }
    }

    function setInfo() {
        switch (show) {
            case true:
                return <p> This is true info para.</p>;
            default:
                return <p> This is default info para.</p>;
        }
    }

    return (
        <>
            <div>
                1. Ternary operator <br />
                2. Logical && operator <br />
                3. if else rendering <br />
                4. Switch case rendering <br /> <br /> <hr />
            </div>

            {show ? <p> This is test para </p> : ""}

            {show && <p> This is Logical and rendering. </p>}

            {setMessage()}

            {setInfo()}
        </>
    );
};

export default Conditional;
