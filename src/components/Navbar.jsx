import { useState } from 'react';
import logo from '/logo_fan.jpg';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_icon from '../assets/profile_img.png';
import caret_icon from '../assets/caret_icon.svg';
import { logout } from '../firebase';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='w-full py-[20px] px-[5%] flex justify-between
     items-center fixed text-base text-[#e5e5e5] bg-gradient-to-t from-black/80 to-black/50 z-50'>
      {/* navbar section left */}
      <div className='flex items-center gap-[50px] '>
        <div className='flex items-center gap-5'>
           <img src={logo} alt="logo" className='w-[60px] rounded-full'/>
           <h1 className='text-2xl text-red-500 font-bold'>Movie Fan</h1>
        </div>
       
        <ul className='gap-[20px] text-[19px] hidden lg:flex'>
          <li className='cursor-pointer hover:text-red-500'>Home</li>
          <li className='cursor-pointer hover:text-red-500'>TVShow</li>
          <li className='cursor-pointer hover:text-red-500'>Movies</li>
          <li className='cursor-pointer hover:text-red-500'>New & Popular</li>
          <li className='cursor-pointer hover:text-red-500'>MyList</li>
           <li className='cursor-pointer hover:text-red-500'>Browse by Language</li>
        </ul>
      </div>

      {/* navbar section right */}
      <div className='flex gap-10 items-center'>
        <img src={search_icon} alt="search-icon" className='w-[20px] cursor-pointer' />
        <img src={bell_icon} alt="search-icon"  className='w-[20px] cursor-pointer'/>
         
        <div 
          className='flex items-center gap-[6px] cursor-pointer relative'
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <img src={profile_icon} alt="profile" className='rounded-sm w-[30px]' />
          <img 
            src={caret_icon} 
            alt="caret_icon" 
            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
          />
    
          <div className={`absolute top-[100%] right-0 w-[190px] bg-[#191919] py-[18px]
           px-5 rounded-sm underline z-[1] transition-opacity duration-200
           ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p onClick={logout} className='text-sm cursor-pointer hover:text-red-500'>Sign Out of Movie Fan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;