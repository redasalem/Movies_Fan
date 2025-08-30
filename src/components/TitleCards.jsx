import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const [apiData,setapiData]=useState([]);

  //responsie Api movies

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // لتوثيق هواية البيانات
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiZDY4NjRjMzVkOTNmY2UyYTk3N2YyNDBiOTE2ZiIsIm5iZiI6MTc0MzM3NzUxMC4xOTIsInN1YiI6IjY3ZTlkNDY2NGY3NDFjNzViYmM2YjYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2XSbmhUmGD_F-Pt1hYPwyNGA-RlnwGj1SNNyCPmZc0'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));
},[apiData])


  return (
    <div className='mt-20 mb-4'>

      <h2 className='mb-6 text-2xl font-semibold text-white'>{title?title:'Popular on Movie Fan'}</h2>

      <div className='gap-4 pr-7 pb-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {apiData.map((card,index)=>{
          return (
               <Link to={`/player/${card.id}`} key={index} className='relative group transition-transform duration-300 hover:scale-105'>
              <img 
                className='rounded-lg object-cover cursor-pointer' 
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} 
                alt="card_image" 
              />
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent  rounded-b-lg'>
              <p className='text-white text-xl font-medium bg-white/30 w-fit p-2 rounded-lg'>{card.original_title}</p>
              </div>
            </Link>
          );
        })}

      </div>

    </div>
  )
}

export default TitleCards