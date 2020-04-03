import React from 'react';
import './styles.scss';
import imageUrl from '../../../../../public/forumBanner.png';
import { Link } from 'react-router-dom';

const ForumBanner = () => {
  return (
    <div className='forumBanner-wrapper'>
      <Link to='/forum'>
        <div>
          <p>Ти какво улови последно?</p>
          <p>Сподели във форума ни!</p>
          <p>ФОРУМ</p>
        </div>
        <img src={imageUrl}></img>  
      </Link>
    </div>
  )
}

export default ForumBanner;
