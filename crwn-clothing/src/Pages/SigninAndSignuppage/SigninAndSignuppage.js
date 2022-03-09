import React from 'react';
import './SigninAndSignuppage.scss';
import Signin from '../../Components/Signin/Signin';
import SignUp from '../../Components/SignUp/SignUp';

const SigninAndSignuppage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <SignUp />
    </div>
)

export default SigninAndSignuppage;