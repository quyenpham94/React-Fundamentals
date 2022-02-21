import React from "react";
import useField from "./Hooks/useField";

const SignUpForm = () => {
    const [formData, handleChange, resetForm] = useField({
        usename: '',
        email: '',
        password: ''
    });
    const handleSubmit = e => {
        e.preventDefault();
        resetForm();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value={formData.username}
                onChange={handleChange}
            />

            <input 
                type="text" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
            />  
            <button>Submit</button>    
        </form>
    )
}

export default SignUpForm;