import React from 'react'
import SideBar from '../components/sidebar/SideBar';
import MessageContainer from '../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className='flex md:w-fit md:h-[75vh] w-[90vw] h-[90vh] bg-indigo-900  shadow-md rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10'>
        <SideBar />
        <MessageContainer />
    </div>
  )
}

export default Home;