import { useState } from 'react';
import logo from '/logo_fan.jpg';
import { Link } from 'react-router-dom';
import { login,signup } from '../firebase';
import netflix_spinner from '../assets/netflix_spinner.gif';

const Login = () => {
  const [signState,setsignState]=useState("Sign In");
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [loading,setloading]=useState(false);

  const user_auth = async (e)=>{
    e.preventDefault();
    setloading(true);
    if(signState === 'Sign In'){
      await login(email,password);
    }else{
      await signup(name,email,password);
    }
    setloading(false);
  }


  return (
     loading?<div className='w-full h-screen flex items-center justify-center'>
      <img src={netflix_spinner} alt="netflix_spinner" className='w-[60px]' />
      </div>:
    <div className='h-screen py-[20px] px-[8%] '  
      style={{  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('./background_banner.jpg')` }}>
      <div className='flex items-center gap-5'>
                <img src={logo} alt="logo" className='w-[70px] rounded-full'/>
                <h1 className='text-2xl text-red-500 font-bold'>Movie Fan</h1>
             </div>
      {/* login-form */}
      <div className='login-form w-full max-w-[450px] bg-black/75 rounded-sm p-15 m-auto'>
        <h1 className='text-[32px] font-medium mb-7 text-center'>{signState}</h1>

        <form className='flex flex-col items-center justify-center'>
          {signState === 'Sign Up' && 
          <input value={name} onChange={(e)=>{setname(e.target.value)}} type='text' placeholder='Your Name'/> }
         
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='email' placeholder='Your Email'/>
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type='password' placeholder='Enter Password'/>
          <button className='px-6 py-2 bg-red-700 my-5 font-bold hover:border-2 hover:bg-green-500 rounded-sm text-[18px] cursor-pointer
           hover:border-emerald-500 hover:scale-110 transition-transform duration-500'
         onClick={user_auth} type='submit'  >{signState}</button>
          {/* form help */}
          <div>
            {/* remember */}
            <div className='flex gap-2 pb-5 justify-center'>
              <input type="checkbox" className='w-4'/>
              <label htmlFor="" className='text-[18px]'>Remember Me</label>
            </div>

           <Link to='/' className='flex items-center justify-between gap-10 mt-3'>
             <p className='text-blue-500 cursor-pointer text-[18px]'>Need Help ?</p>
              <p className='text-amber-400 font-bold cursor-pointer text-[18px]'>Go to Home page</p>
           </Link>
          </div>
        </form>
        {/* form switch */}
        <div className='mt-[40px] text-[#737373] flex justify-center'>
          {signState === 'Sign In'?
           <p>
            New to Movie Fan ? 
            <span className='ml-[6px] text-white font-medium cursor-pointer' onClick={()=>setsignState('Sign Up')}>
               Sign Up Now
            </span>
              </p>
              :
                <p>
            Already have account ? 
            <span className='ml-[6px] text-white font-medium cursor-pointer' onClick={()=>setsignState('Sign In')}>
              Sign In Now
              </span></p>
          }
         
        
        </div>

      </div>
        
   </div>   
   
  )
}

export default Login