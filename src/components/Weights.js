import React, { useState } from 'react'
import Weight from './Weight';
import firebase from '../firebase'
import { useCollectionData } from "react-firebase-hooks/firestore"

function Weights({ user, auth, firestore }) {
    const [weight, setWeight] = useState("");
    const weightRef = firestore.collection(`users/${auth.currentUser.uid}/weights`)
    const displayRef = firestore.collection(`users/${auth.currentUser.uid}/weights`).orderBy("createdAt", "desc");
    const [weights] = useCollectionData(displayRef, { idField: "id" });
    console.log(weights)
    const signOut = () => auth.signOut();

    const onSubmitWeight = (e) => {
        e.preventDefault();
        setWeight("");
        weightRef.add({
            text: weight,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }
    return (
        <div className="weights">
            <div className="header">
                <div className="header__left">
                    <img src={user.photoURL} alt="" />
                    <h4>{user.displayName}</h4>
                </div>
                <div className="header__right">
                    <button onClick={signOut}>Sign Out</button>
                </div>
            </div>
            <div className="form">
                <form onSubmit={onSubmitWeight}>
                    <input type="number" required value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter the weight in Kg." autoFocus min="0" step="any" />
                    <button type="submit">Add weight</button>
                </form>
            </div>
            <div className="allWeights">
                {weights && weights.map((weight) => <Weight key={weight.id} {...weight} weightRef={weightRef} />)}
            </div>
        </div>
    )
}

export default Weights
