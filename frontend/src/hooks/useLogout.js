import React, { useState } from 'react'
import { API_URL } from '../../utils/constants';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../utils/context/AuthContext';

function useLogout() {
  const [ loading, setLoading ] = useState(false);
    const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
        const response = await fetch(API_URL + "/auth/logout", {
            method: "GET",
            credentials: 'include'
        });
        const data = await response.json();
        if(data.error) {
            throw new Error(data.error);
        }

        localStorage.removeItem("chat-user");
        setAuthUser(null);
        toast.success("Logged Out Successfully");

    } catch (error) {
        toast.error(error.message);        
    } finally {
        setLoading(false);
    }
  };

  return { loading, logout };
}

export default useLogout