import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { auth } from "../../firebase/firebase.utils";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
    <div className='sing-in-and-sign-up'>
    <SignIn />
    </div>
);


export default SignInAndSignUpPage;

