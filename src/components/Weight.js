import React from 'react'
import moment from 'moment'

function Weight({ id, text, createdAt, weightRef }) {
    const onDeleteWeight = (id) => weightRef.doc(id).delete();
    return (
        <div key={id} className="weight">
            <div className="weight__item">
                <div className="weight__ItemUp">
                    <p>{moment(createdAt?.toDate()).calendar()}</p>
                    <button onClick={() => onDeleteWeight(id)}>Delete</button>
                </div>
                <h1>{text} Kg</h1>
            </div>
        </div>
    )
}

export default Weight
