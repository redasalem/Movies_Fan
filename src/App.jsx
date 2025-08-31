import Home from './pages/Home';
import Login from './pages/Login';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Player from './pages/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
 import { ToastContainer} from 'react-toastify';
import MovieDetails from './pages/MovieDetails';
const App = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("Logged In");
         navigate('/');
      }else{
        console.log('Logged Out');
         navigate('/login');
      }

    })

  },[]);

  return (
    <div>
       <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/movieDetails/:id' element={<MovieDetails/>}/>
         <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
      
    
    </div>
  )
}

export default App;