import React, {useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword]= useState(false);
    const toggleShowPassword=()=>{
        setIsShowPassword(!isShowPassword);
    };
  return (
    <div>
        <input
        type= {isShowPassword?"text":"password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"} />
        {isShowPassword ? <FaRegEye
        size={22}
        onClick={() => toggleShowPassword()}
        />:<FaRegEyeSlash
        size={22}
        onClick={() => toggleShowPassword()}
        />}
    </div>
  )
}

export default PasswordInput