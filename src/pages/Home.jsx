import Navbar from '../components/Navbar';
import hero_banner from '../assets/hero_banner.jpg';
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/play_icon.png';
import info_icon from '../assets/info_icon.png';
import TitleCards from '../components/TitleCards';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar/>
      <div className='flex-1'>
        <div className="relative w-full h-screen">
          <img src={hero_banner} alt="hero_banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>
        </div>
        <div className="absolute top-[35%] left-[6%] text-white">
          <img src={hero_title} alt="hero_title" className="w-[500px] mb-5" />
          <p className="text-xl max-w-[600px] leading-relaxed">
            Embark on an extraordinary journey through endless entertainment. Discover award-winning movies, 
            captivating series, and groundbreaking shows. From heart-pounding action to touching dramas, 
            your next unforgettable story awaits. Start streaming today and join millions of viewers worldwide.
          </p>
          <div className='flex gap-[10px] mb-[50px] mt-5'>
            <button className='border-0 outline-0 py-2 px-6 inline-flex items-center gap-[10px] text-xl font-bold bg-white rounded-sm cursor-pointer text-black hover:bg-[#ffffffbf]'>
              <img className='w-[25px]' src={play_icon} alt="play_icon" /> Play
            </button>
            <button className='border-0 outline-0 py-2 px-6 inline-flex items-center gap-[10px] text-xl font-bold bg-gray-400 rounded-sm cursor-pointer text-white hover:bg-[#6d6d6e66]'>
              <img className='w-[25px]' src={info_icon} alt="info_icon" /> More Info
            </button>
          </div>
        </div>
        
        <div className="relative z-10 sm:ml-7 ml-[20%]">
          <TitleCards category={'now_playing'}/>
          <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
          <TitleCards title={'Only on Netflix'} category={'popular'}/>
          <TitleCards title={'Upcoming'} category={'upcoming'}/>
          <TitleCards title={'Top Pics for You'} category={'top_rated'}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;