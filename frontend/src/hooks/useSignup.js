import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { API_URL } from '../../utils/constants';
import { useAuthContext } from '../../utils/context/AuthContext.jsx';


const handleInputErrors = ({ fullname, username, password, confirmPassword, gender }) => {
    if ( !fullname || !username || !password || !confirmPassword || !gender ) {
        toast.error("Please fill in all fields")
        return false;
    }
    
    if ( password !== confirmPassword ) {
        toast.error("Passwords doesn't match")
        return false;
    }

    if ( password.length < 6 ) {
        toast.error("Password must be at least 6 characters")
        return false;
    }

    return true;
}

function useSignup() {
  const [ loading, setLoading ] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
    if ( !success ) return;

    setLoading(true);
    try {
        const res = await fetch(API_URL + "/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
            credentials: 'include'
        });

        const data = await res.json();
        console.log(data);
        
        if(data.error ) {
            throw new Error(data.error);
        }
        
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data);
        toast.success("Signed In Successfully");
        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };

  return { loading, signup };
}

export default useSignup;