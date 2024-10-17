import { toast } from "react-toastify";
import { API_URL } from "../../utils/constants";

import React, { useEffect, useState } from "react";

function useGetConversations() {
    const [ loading, setLoading ] = useState(false);
    const [ conversations, setConversations ] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
        setLoading(true);
        try {
          const res = await fetch(API_URL + "/user", {
            method: "GET",
            credentials: "include",
          });
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error);
          }
          setConversations(data?.filteredUsers);
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      getConversations();
  }, [])

  return { loading, conversations };
}

export default useGetConversations;
