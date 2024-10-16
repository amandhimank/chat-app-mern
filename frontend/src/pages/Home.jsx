import React from 'react'
import SideBar from '../components/sidebar/SideBar';

const Home = () => {
  return (
    <div className='flex md:h-[75vh] h-[80vh] bg-indigo-900  shadow-md rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10'>
        <SideBar />
    </div>
  )
}

export default Home;