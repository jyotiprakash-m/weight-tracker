import React, { useState } from 'react'
import Weight from './Weight';

function Weights() {
    const [weight, setWeight] = useState("");

    return (
        <div className="weights">
            <div className="header">
                <div className="header__left">
                    <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg" alt="" />
                    <h4>jpmohanta32@gmail.com</h4>
                </div>
                <div className="header__right">
                    <button>Sign Out</button>
                </div>
            </div>
            <div className="form">
                <form onSubmit="">
                    <input required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter the weight." autoFocus />
                    <button type="submit">Add weight</button>
                </form>
            </div>
            <div className="allWeights">
                <Weight />
            </div>
        </div>
    )
}

export default Weights
