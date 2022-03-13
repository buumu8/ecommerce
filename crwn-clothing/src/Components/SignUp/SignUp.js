import React,{useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton';

import { signUpStart } from '../../redux/user/user.action';

import { toast } from 'react-toastify';

import { SignUpContainer, SignUpTitle } from './SignUp.styles';

const SignUp = ({signUpStart}) => {
  const [userCredentials, setUserCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      toast.error("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });

  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };
  const { displayName, email, password, confirmPassword } = userCredentials;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);