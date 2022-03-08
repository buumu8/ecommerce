import React,{Component} from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import './Signin.scss';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
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
                    <CustomButton type = 'submit'>
                        SIGN IN
                    </CustomButton>
                </form>
            </div>
        )
    }
    
}

export default Signin;