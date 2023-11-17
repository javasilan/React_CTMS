import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPlayer from 'react-player';
import CampusMap from './CampusMap';
import './CampusMap.css';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='video-container mt-2'> 
        <ReactPlayer
          url='Images/Centurion University.mp4'  
          controls={true}
          width='100%'
          height='100%'
          allowFullScreen={true}
          className='video'
          playing={true}
          
          loop={true}
          autoPlay={true}
        />
      </div>
      <div className='text-center mt-3'>
        <h1>Learn The World @ CENTURION UNIVERSITY</h1>
        <h3>We have campuses in six districts of Odisha</h3>
        <CampusMap />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
