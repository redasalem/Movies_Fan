import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import play_icon from '../assets/play_icon.png';

const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const navigate = useNavigate();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFiZDY4NjRjMzVkOTNmY2UyYTk3N2YyNDBiOTE2ZiIsIm5iZiI6MTc0MzM3NzUxMC4xOTIsInN1YiI6IjY3ZTlkNDY2NGY3NDFjNzViYmM2YjYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2XSbmhUmGD_F-Pt1hYPwyNGA-RlnwGj1SNNyCPmZc0'
        }
    };

    const fetchMovieDetails = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch movie details.');
                }
                return res.json();
            })
            .then(data => {
                setDetails(data);
                console.log(data);
            })
            .catch(err => {
                console.error(err);
                // يمكنك توجيه المستخدم إلى صفحة خطأ أو عرض رسالة خطأ
            });
    }, [id]);

    useEffect(() => {
        fetchMovieDetails();
    }, [fetchMovieDetails]);

    if (!details) {
        return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[70vh] flex items-end">
                <img
                    src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
                    alt={details.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

                {/* Movie Info */}
                <div className="relative z-20 w-full px-[6%] pb-8 sm:pb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{details.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                        {details.vote_average && (
                            <span className="text-green-500 font-semibold">
                                {Math.round(details.vote_average * 10)}% Match
                            </span>
                        )}
                        <span>{new Date(details.release_date).getFullYear()}</span>
                        <span>{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</span>
                        <span className="border border-gray-600 px-2 py-0.5 text-sm rounded-md">HD</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <Link to={`/player/${id}`}>
                            <button className="bg-white text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md flex items-center gap-2 hover:bg-white/90 transition-colors cursor-pointer">
                                <img src={play_icon} alt="Play" className="w-5 sm:w-6 h-5 sm:h-6" />
                                <span>Play</span>
                            </button>
                        </Link>
                        <button
                            className="bg-gray-600/80 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md flex items-center gap-2 hover:bg-gray-600 transition-colors cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            <span>Go to Home Page</span>
                        </button>
                    </div>

                    <p className="text-lg max-w-full sm:max-w-[60%] leading-relaxed text-gray-200">
                        {details.overview}
                    </p>
                </div>
            </div>

            {/* Details Section */}
            <div className="px-[6%] py-8 sm:py-12">
                <div className="sm:grid sm:grid-cols-3 sm:gap-12">
                    {/* Column 1 - Genres */}
                    <div className="mb-12 sm:mb-0">
                        <h3 className="text-2xl font-semibold mb-6">Genres</h3>
                        <div className="flex flex-wrap gap-2">
                            {details.genres.map(genre => (
                                <span key={genre.id} className="bg-gray-800 px-4 py-1 rounded-full text-sm">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Production */}
                    <div className="mb-12 sm:mb-0">
                        <h3 className="text-2xl font-semibold mb-6">Production</h3>
                        <div className="space-y-3 text-gray-300">
                            {details.production_companies.map(company => (
                                <p key={company.id}>{company.name}</p>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 - Additional Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Details</h3>
                        <div className="space-y-3 text-gray-300">
                            <p><span className="text-gray-400">Release Date:</span> {new Date(details.release_date).toLocaleDateString()}</p>
                            <p><span className="text-gray-400">Runtime:</span> {details.runtime} minutes</p>
                            <p><span className="text-gray-400">Rating:</span> {details.vote_average.toFixed(1)}/10</p>
                            <p><span className="text-gray-400">Budget:</span> ${details.budget?.toLocaleString()}</p>
                            <p><span className="text-gray-400">Revenue:</span> ${details.revenue?.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MovieDetails;