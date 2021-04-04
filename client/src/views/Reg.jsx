import React, {useState} from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link, navigate} from '@reach/router';

const Reg = props => {

    const {setLogged} = props;

    const initialReg = {
        firstName:"",
        lastName:"",
        email:"",
        birthday:"",
        profilePicture:"",
        username:"",
        password:"",
        confirmPassword:"",
        terms:""
    }
    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg);

    const changeInputHandler = (e) => {
        setReg({
            ...reg,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/register',reg,{withCredentials:true})
            .then(res => {
                console.log(res);
                if(res.data.user){
                    setLogged(res.data.user);
                    navigate("/dashboard")
                }
                else{
                    setErrors(res.data);
                }
        })
            .catch(err=>console.log(err))
    }

    return (
        <form className="col-5 mx-auto" onSubmit={submitHandler}>
            <h2>Register</h2>
            <Input
                name="firstName"
                value={reg.firstName}
                error={errors.firstName}
                changeHandler={changeInputHandler}
                label="First Name:"
                type="text"
            />
            <Input
                name="lastName"
                value={reg.lastName}
                error={errors.lastName}
                changeHandler={changeInputHandler}
                label="Last Name:"
                type="text"
            />
            <Input
                name="email"
                value={reg.email}
                error={errors.email}
                changeHandler={changeInputHandler}
                label="Email:"
                type="email"
            />
            <Input
                name="birthday"
                value={reg.birthday}
                error={errors.birthday}
                changeHandler={changeInputHandler}
                label="Birthday:"
                type="date"
            />
            <Input
                name="profilePicture"
                value={reg.profilePicture}
                error={errors.profilePicture}
                changeHandler={changeInputHandler}
                label="Profile Picture:"
                type="text"
            />
            <Input
                name="username"
                value={reg.username}
                error={errors.username}
                changeHandler={changeInputHandler}
                label="Username:"
                type="username"
            />
            <Input
                name="password"
                value={reg.password}
                error={errors.password}
                changeHandler={changeInputHandler}
                label="Password:"
                type="password"
            />
            <Input
                name="confirmPassword"
                value={reg.confirmPassword}
                error={errors.confirmPassword}
                changeHandler={changeInputHandler}
                label="Confirm Password:"
                type="password"
            />
            <Input
                name="terms"
                value={true}
                error={errors.terms}
                changeHandler={changeInputHandler}
                label="Terms:"
                type="checkbox"
            />
            <Input
                submitValue="Register"
                type="submit"
            />
            <br/>
            <Link to="/login">Already have an account?</Link>
        </form>
    )
}

export default Reg;