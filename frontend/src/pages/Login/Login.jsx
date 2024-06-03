import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import {validateEmail} from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';



const Login=() => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(null);

    const navigate= useNavigate()

    const handleLogin=async (e)=>{
        e.preventDefault();
        if(!validateEmail(email)){
            setError("Please enter a valid email address.");
            return;
        }
        if(!password){
            setError("Please enter a password.");
        }
        setError("")
        try{
            const response = await axiosInstance.post("/login",{
                email:email,
                password:password,
            });
            if(response.data && response.data.accessToken){
                localStorage.setItem("token", response.data.accessToken);
                navigate("/dashboard");
            }
        }catch(error){
            if(error.response && error.response.data && error.response.data.message){
                setError(error.response.data.message);
            }
            else{
                setError("An unexpected error occurred. Please try again")
            }
        }
        
    }
    return(
        <>
        <div>
            <div>
                <form onSubmit={handleLogin}>
                    <h4>Login</h4>
                    <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <PasswordInput 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}/>
                    {error && <p>{error}</p>}
                    <button type="submit">
                        Login
                    </button>
                    <p>Not registered yet?{" "}
                    <Link to='/signup'>
                        Create an account
                    </Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}
export default Login