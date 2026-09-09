import './App.css';
import { useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';
import Signup from './pages/Signup';
import Userdashboard from './pages/Userdashboard'
import Userdashboardreferrals from './components/userdashboardreferrals/Userdashboardreferrals';
import Profile from './components/profile/Profile'
import Post from './pages/Post';
import Admindashboard from './components/admindashboard/Admindashboard';
import Aboutpage from './pages/Aboutpage';
import News from './pages/News';
import Membership from './pages/Membership';
import Epoch from './pages/Epoch';
import Category from './pages/Category';
import Cbet from './pages/cibet/Cbet'
import Association from './pages/Association';
import Online from './pages/Online';
function App() {
  const [loader,setLoader] = useState(true)
  const [posts, setPosts] = useState([])
  
    const fetchPosts = async ()=>{
    const postRequest = await (
     fetch(`${route}/api/fetchPosts`))
    const posts = await (
     postRequest.json()) 
      setPosts(posts)
      setLoader(false)
  }
  useEffect(() => {
    fetchPosts()
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
      AOS.refresh()
    }, [])

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  // const route = 'https://biotech-backend.onrender.com'
  const route = 'http://localhost:5000'
  
  return (
    <>
    <AnimatePresence>
        <Router>
        <motion.div className="App"
        key={Routes.Route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:0.2}}
        variants={{
          initialState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState:{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }
        }}
        >
          <Routes>
              <Route path='/' element={<Home route={route} posts={posts} loader={ loader} />}/>
            <Route path='/login' element={<Login route={route}/>}/>
            <Route path='/signup' element={<Signup route={route}/>}/>
            <Route path='/dashboard' element={<Userdashboard route={route}/>}/>
            <Route path='/referrals' element={<Userdashboardreferrals route={route}/>}/>
            <Route path='/myprofile' element={<Profile route={route}/>}/>
            <Route path='/posts/:id' element={<Post route={route}/>}/>
            <Route path='/admin' element={<Admindashboard route={route}/>}/>
            <Route path='/about' element={<Aboutpage />}/>
            <Route path='/cbet' element={<Cbet />}/>
            <Route path='/news' element={<News posts={posts} loader={ loader}/>}/>
            <Route path='/membership' element={<Membership />}/>
            <Route path='/fnibe' element={<Epoch />}/>
            <Route path='/onlinecourse' element={<Online />}/>
            <Route path='/categories' element={<Category />}/>
            <Route path='/association' element={<Association />}/>
          </Routes>
        </motion.div>
      </Router>
      </AnimatePresence>
    </>
  );
}

export default App;         