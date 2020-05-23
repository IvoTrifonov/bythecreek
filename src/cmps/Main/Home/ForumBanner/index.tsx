import React from 'react';
import './styles.scss';
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
      </Link>
    </div>
  )
}

export default ForumBanner;
