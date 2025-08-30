import Youtube_icon from '../assets/youtube_icon.png';
import facebook_icon from '../assets/facebook_icon.png';
import twitter_icon from '../assets/twitter_icon.png';
import instagram_icon from '../assets/instagram_icon.png';

const Footer = () => {
  return (
    <footer className='w-full py-10 px-[6%] bg-black/90 border-t border-gray-800'>
      <div className='max-w-[1200px] mx-auto'>
        {/* Social Media Icons */}
        <div className='flex justify-center gap-12 mb-16'>
          <a href="#" className='hover:scale-125 transition-transform duration-300'>
            <img src={Youtube_icon} alt="Youtube" className='w-10 h-10 opacity-80 hover:opacity-100'/>
          </a>
          <a href="#" className='hover:scale-125 transition-transform duration-300'>
            <img src={facebook_icon} alt="Facebook" className='w-10 h-10 opacity-80 hover:opacity-100'/>
          </a>
          <a href="#" className='hover:scale-125 transition-transform duration-300'>
            <img src={twitter_icon} alt="Twitter" className='w-10 h-10 opacity-80 hover:opacity-100'/>
          </a>
          <a href="#" className='hover:scale-125 transition-transform duration-300'>
            <img src={instagram_icon} alt="Instagram" className='w-10 h-10 opacity-80 hover:opacity-100'/>
          </a>
        </div>

        {/* Footer Links */}
        <div className='grid grid-cols-4 gap-x-12 gap-y-6 mb-12 text-base font-medium'>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Audio Description</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Help Center</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Gift Cards</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Media Center</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Investor Relations</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Jobs</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Terms of Use</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Privacy</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Legal Notices</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors  transform duration-200'>Cookie Preferences</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Corporate Information</a>
          <a href="#" className='text-gray-300 hover:text-red-400 transition-colors transform duration-200'>Contact Us</a>
        </div>


        {/* Copyright */}
        <div className='text-gray-400 text-base flex items-center justify-center'>
          <p className='font-bold text-xl mt-5'>&copy; {new Date().getFullYear()} Movie Fan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer