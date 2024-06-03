import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import {validateEmail} from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const SignUp=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(null);

    const navigate=useNavigate();
    const handleSignUp=async (e)=>{
        e.preventDefault();
        if(!name){
            setError("Please enter a name.");
            return;
        }
        if(!validateEmail(email)){
            setError("Please enter a valid email address.");
            return;
        }
        if(!password){
            setError("Please enter a password.");
        }
        setError('')
        //SignUp API call
        try{
            const response = await axiosInstance.post("/create-account",{
                fullName: name,
                email:email,
                password:password,
            });
            if(response.data && response.data.error){
                setError(response.data.message);
                return;
            }
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
                <form onSubmit={handleSignUp}>
                    <h4>SignUp</h4>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
                    <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {error && <p>{error}</p>}
                    <button type="submit">
                        Create Account
                    </button>
                    <p>Already have an account?{" "}
                    <Link to='/login'>
                        Login
                    </Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    );
}
export default SignUp