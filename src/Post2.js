import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

function Post({ displayName, userName, verified, text, image, avator }) {
  return (
    <div className='post'>
      <div className='post-avatar'>
        <Avatar src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__postheaderText'>
            <h3>
            Bill Gates{' '}
              <spam className="post__headerSpecial">
                 <VerifiedUserIcon  /> @BillGates
              </spam>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>
              <h4>
              Here are five books that I’d recommend as we wrap up 2020. I hope you find something that helps you—or the book lover in your life—finish the year on a good note.   
              </h4>
            </p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/card_img/1357603434824945666/WIZjMXFr?format=jpg&name=small"
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post;
