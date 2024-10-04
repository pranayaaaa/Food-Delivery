import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="heder-contents">
            <h2>Welcome to <span>Foody</span> Kitchen!</h2>
            <p>Discover the finest delights crafted with passion and served with love. Whether you're craving delicious appetizers, hearty main courses, or indulgent desserts, we have something to satisfy every palate.</p>
            <button className='viewmenu'>View Menu</button>
        </div>
    </div>
  )
}

export default Header