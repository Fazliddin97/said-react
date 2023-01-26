import './App.css';
import  React from 'react';

const Header = () => {
    return <header className='header'>
    <div className='flex'>
        <div> 
          <img src='https://www.pngall.com/wp-content/uploads/2/Windows-Logo-PNG-Transparent-HD-Photo.png'></img>
        </div>

        <div className='nav_menu'>
        <ul>
            <li>
              <a href=''>Home</a>
            </li>

            <li>
              <a href=''>Profile</a>
            </li>

            <li>
              <a href=''>Location</a>
            </li>

            <li>
              <a href=''>Menu</a>
            </li>

            <li>
              <a href=''>Faq</a>
            </li>
          </ul>
        </div>
    </div>
  </header>

}
export default Header;
