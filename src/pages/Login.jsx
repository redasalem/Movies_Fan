import { useState } from 'react';
import logo from '/logo_fan.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { login, signup, resetPassword } from '../firebase';
import netflix_spinner from '../assets/netflix_spinner.gif';

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetLoading, setResetLoading] = useState(false);
    const navigate = useNavigate();

    const user_auth = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (signState === 'Sign In') {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }
        setLoading(false);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setResetLoading(true);
        await resetPassword(resetEmail);
        setResetLoading(false);
    };

    const handleGuestLogin = () => {
        navigate('/');
    };

    return (
        <>
            {loading ? (
                <div className='w-full h-screen flex items-center justify-center'>
                    <img src={netflix_spinner} alt="netflix_spinner" className='w-[60px]' />
                </div>
            ) : (
                <div
                    className='h-screen py-[20px] px-[8%] relative'
                    style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('./background_banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='flex items-center gap-5'>
                        <img src={logo} alt="logo" className='w-[70px] rounded-full' />
                        <h1 className='text-2xl text-red-500 font-bold'>Movie Fan</h1>
                    </div>
                    {/* login-form */}
                    <div className='login-form w-full max-w-[450px] bg-black/75 rounded-md p-10 m-auto mt-20 text-white'>
                        <h1 className='text-[32px] font-medium mb-7 text-center'>{signState}</h1>
                        <form onSubmit={user_auth} className='flex flex-col items-center justify-center space-y-4'>
                            {signState === 'Sign Up' && (
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    placeholder='Your Name'
                                    className='w-full p-3 rounded-md bg-[#333] text-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                    required
                                />
                            )}
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                placeholder='Your Email'
                                className='w-full p-3 rounded-md bg-[#333] text-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                required
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                placeholder='Enter Password'
                                className='w-full p-3 rounded-md bg-[#333] text-white focus:outline-none focus:ring-2 focus:ring-red-500'
                                required
                            />
                            <button
                                type='submit'
                                className='w-full px-6 py-3 bg-red-700 font-bold rounded-md text-[18px] cursor-pointer hover:bg-red-800 transition-colors duration-300'
                            >
                                {signState}
                            </button>
                        </form>
                        {/* form help */}
                        <div className='mt-4 flex flex-col items-center'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" className='w-4' />
                                    <label className='text-sm text-[#B3B3B3]'>Remember Me</label>
                                </div>
                                <button
                                    onClick={() => setShowResetModal(true)}
                                    className='text-sm text-[#B3B3B3] hover:underline'
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </div>
                        {/* form switch */}
                        <div className='mt-[40px] text-[#737373] text-center'>
                            {signState === 'Sign In' ? (
                                <p>
                                    New to Movie Fan?
                                    <span className='ml-[6px] text-white font-medium cursor-pointer' onClick={() => setSignState('Sign Up')}>
                                        Sign Up Now
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Already have an account?
                                    <span className='ml-[6px] text-white font-medium cursor-pointer' onClick={() => setSignState('Sign In')}>
                                        Sign In Now
                                    </span>
                                </p>
                            )}
                        </div>
                        {/* Guest Login Button */}
                        <div className='mt-6 text-center'>
                            <button
                                onClick={handleGuestLogin}
                                className='w-full px-6 py-3 bg-gray-500 font-bold rounded-md text-[18px] cursor-pointer hover:bg-gray-600 transition-colors duration-300'
                            >
                                Login as Guest
                            </button>
                        </div>
                    </div>

                    {/* Password Reset Modal */}
                    {showResetModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                            <div className="bg-gray-800 rounded-lg p-8 w-full max-w-sm relative">
                                <button
                                    onClick={() => setShowResetModal(false)}
                                    className="absolute top-4 right-4 text-white text-2xl"
                                >
                                    &times;
                                </button>
                                <h2 className="text-2xl font-bold text-white mb-6 text-center">Reset Password</h2>
                                <form onSubmit={handleResetPassword} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={resetEmail}
                                        onChange={(e) => setResetEmail(e.target.value)}
                                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={resetLoading}
                                        className={`w-full p-3 rounded-md font-semibold ${resetLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 transition-colors'}`}
                                    >
                                        {resetLoading ? 'Sending...' : 'Send Reset Link'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Login;