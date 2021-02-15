import React,{useState, useEffect, setPosts} from'react';
import TweetBox from './TweetBox';
import Post from './Post';
import Post2 from './Post2';
import './Feed.css'

function Feed() {
  
      return (
        <div className='feed'>
      <div className='Feed__header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      <Post />
      <Post2 />      
    </div>
  )
}

export default Feed

