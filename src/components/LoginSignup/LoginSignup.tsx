import { useState } from "react"

import './LoginSignup.css'

interface LoginSignupProps {
}

export const LoginSignup: React.FC<LoginSignupProps> = ({}) => {
    const [signIn, setSignIn] = useState(true)
    return (
        <div className="login-signup-form-wrapper">
            <div className=".wrapper">
                <div className={`sign-in ${signIn ? 'animate-signIn': ''}`}>
                    <button onClick={() => setSignIn(!signIn)}>SWAP</button>
                </div>
                <div className={`sign-in ${!signIn ? 'animate-signUp': ''}`}>
                <button onClick={() => setSignIn(!signIn)}>SWAP</button>
                </div>
            </div>
        </div>
        )
}