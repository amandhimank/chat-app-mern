import React from 'react'
import { BiLogOut } from "react-icons/bi";

function LogoutButton() {
  return (
    <div className='mt-auto cursor-pointer'>
      <BiLogOut className='text-white size-6' />
    </div>
  )
}

export default LogoutButton