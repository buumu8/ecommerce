import React,{Component} from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './Signin.scss';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({
            [name]: value
        })

    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required />
                    <FormInput name='password' 
                        type='password' 
                        label="password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required />
                    <div className='buttons'>
                        <CustomButton type = 'submit'>
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default Signin;