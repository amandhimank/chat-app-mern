import React, { useState } from 'react'
import { API_URL } from '../../utils/constants';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../utils/context/AuthContext';

const handleInputErrors = ({ username, password }) => {
    if ( !username || !password ) {
        toast.error("Please fill in all fields")
        return false;
    }
    return true;
}

function useLogin() {
  const [ loading, setLoading ] = useState(false);
    const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputErrors({ username, password });
    if ( !success ) return;

    setLoading(true);
    try {
        const res = await fetch(API_URL + "/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
            credentials: 'include'
        });

        const data = await res.json();
        if(data.error) {
            throw new Error(data.error);
        }
        
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data);
        toast.success("Logged In Successfully");
        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin