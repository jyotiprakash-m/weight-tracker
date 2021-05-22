import React, { useState } from 'react'
import Weight from './Weight';

function Weights({ user }) {
    const [weight, setWeight] = useState("");
    console.log(user);
    console.log(user.displayName);

    return (
        <div className="weights">
            <div className="header">
                <div className="header__left">
                    <img src={user.photoURL} alt="" />
                    <h4>{user.displayName}</h4>
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
                <Weight />
                <Weight />
                <Weight />
                <Weight />
                <Weight />
                <Weight />
            </div>
        </div>
    )
}

export default Weights
