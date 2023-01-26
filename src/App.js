// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (

    <div className='wrapper'>
     
     <header className='header'>
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

      
 

     <nav className='nav'>
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
     </nav>

    <div className='content'>
      <img src='https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg'></img>

      <div>
        Avatarka
      </div>
    </div>
      
    </div>
  );
}


export default App;
