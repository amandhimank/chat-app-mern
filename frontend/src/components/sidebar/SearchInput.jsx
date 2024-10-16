import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <form className='flex items-center gap-3'>
      <input type="text" placeholder="Type here" className="input input-bordered rounded-full w-full max-w-xs" />
      <button type='submit' className="btn btn-warning btn-circle text-white"><IoSearchSharp className='size-6' /></button>
    </form>
  )
}

export default SearchInput;