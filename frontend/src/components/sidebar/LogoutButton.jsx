import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
  const { loading, logout } = useLogout();

  const handleClick = async () => {
    await logout();
  }

  return (
    <div className='mt-auto cursor-pointer pt-2'>
      {loading ? <span className="loading loading-spinner loading-md"></span> : <BiLogOut onClick={handleClick} className='text-white size-6' />}
    </div>
  )
}

export default LogoutButton