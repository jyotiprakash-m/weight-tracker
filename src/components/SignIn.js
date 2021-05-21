import React from 'react'

function SignIn() {
    return (
        <div className="signIn">
            <h1>Weight Tracker</h1>
            <div className="signIn__containts">
                <h2>Sign In/Sign Up</h2>
                <div className="signIn__button">
                    <div className="logo">
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                    </div>
                    <button>Sign In With Google</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
