import React, {useState} from 'react';
import Axios from 'axios';
import Input from '../components/Input';
import {Link, navigate} from '@reach/router';


const Login = (props) => {

    const {setLogged} = props;
    const intialLogin = {
        email:"",
        password:""
    }

    const [log,setLog] = useState(intialLogin);
    const [errors,setErrors] = useState(intialLogin);

    const changeInputHandler = (e) => {
        setLog({
            ...log,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/login',log,{withCredentials:true})
            .then(res => {
                console.log(res);
                if(res.data.user){
                    setLogged(res.data.user);
                    navigate("/api/allusers/chat");
                }
                else{
                    console.log(res.data);
                }
        })
            .catch(err=>console.log(err))
    }


    return (
        <form onSubmit={submitHandler} className="col-5">
            <h2>Login</h2>
            <Input
                name="email"
                value={log.email}
                error={errors.email}
                changeHandler={changeInputHandler}
                label="Email:"
                type="email"
            />
            <Input
                name="password"
                value={log.password}
                error={errors.password}
                changeHandler={changeInputHandler}
                label="Password:"
                type="password"
            />
            <Input
                submitValue="Login"
                type="submit"
            />
            <br/>
            <Link to="/">Don't have an account?</Link>
        </form>
    );
}


export default Login;