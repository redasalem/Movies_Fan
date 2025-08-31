import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import back_arrow_icon from '../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiZDY4NjRjMzVkOTNmY2UyYTk3N2YyNDBiOTE2ZiIsIm5iZiI6MTc0MzM3NzUxMC4xOTIsInN1YiI6IjY3ZTlkNDY2NGY3NDFjNzViYmM2YjYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2XSbmhUmGD_F-Pt1hYPwyNGA-RlnwGj1SNNyCPmZc0'
      }
    };

    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
      <img 
        src={back_arrow_icon} 
        alt="Back to details" 
        className='absolute top-5 left-5 w-8 cursor-pointer hover:opacity-80 transition-opacity' 
        onClick={() => navigate(`/movieDetails/${id}`)}
      />
      
      {loading ? (
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Loading Trailer...</h2>
          <p className="text-gray-400">Please wait while we fetch the video</p>
        </div>
      ) : apiData?.key ? (
        <>
          <iframe
            className='rounded-xl shadow-2xl'
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title={apiData.name || 'Movie Trailer'}
            style={{ border: "0" }}
            allowFullScreen
          ></iframe>

          {/* Player info */}
          <div className='flex items-center justify-between w-[90%] text-white mt-4 px-4'>
            {apiData.published_at && (
              <p className="text-gray-400">
                Published: {new Date(apiData.published_at).toLocaleDateString()}
              </p>
            )}
            {apiData.name && (
              <p className="font-semibold text-lg">{apiData.name}</p>
            )}
            {apiData.type && (
              <p className="text-gray-400 uppercase text-sm">{apiData.type}</p>
            )}
          </div>
        </>
      ) : (
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">No Trailer Available</h2>
          <p className="text-gray-400">Sorry, we couldn't find a trailer for this movie.</p>
        </div>
      )}
    </div>
  );
};

export default Player;