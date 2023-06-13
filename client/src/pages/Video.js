import React from 'react';
import SPY from "../styles/spy.mp4"
class Video extends React.Component {
  render() {
    return (
      <div className='flex-fit '>
        <video src={SPY}/>
      </div>
    );
  }
}

export default Video;