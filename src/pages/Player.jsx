import { useEffect, useState } from 'react';
import back_arrow_icon from '../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();
  const Navigate = useNavigate();
  const [apiData,setapiData]=useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiZDY4NjRjMzVkOTNmY2UyYTk3N2YyNDBiOTE2ZiIsIm5iZiI6MTc0MzM3NzUxMC4xOTIsInN1YiI6IjY3ZTlkNDY2NGY3NDFjNzViYmM2YjYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2XSbmhUmGD_F-Pt1hYPwyNGA-RlnwGj1SNNyCPmZc0'
  }
};

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));
},[apiData]);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img src={back_arrow_icon} alt="back_arrow_icon" className='absolute top-5 left-5 
      w-13 cursor-pointer' onClick={()=>Navigate('/')}/>
     <iframe
     className='rounded-xl'
  width="90%"
  height="90%"
  src={`https://www.youtube.com/embed/${apiData.key}`}
  title="trailer"
  style={{ border: "0" }}
  allowFullScreen
></iframe>

{/* //player info */}
<div className='flex items-center justify-between w-[90%] '>
  <p>{apiData.published_at.slice(0,10)}</p>
   <p>{apiData.name}</p>
    <p>{apiData.type}</p>
</div>

    </div>
  )
}

export default Player