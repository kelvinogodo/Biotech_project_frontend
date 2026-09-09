import React , {useState,useEffect} from 'react'
import "./userdashboardheader.css"
import { Link, useNavigate } from 'react-router-dom'
import {BiUser,BiChevronDown} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {RxDashboard} from 'react-icons/rx'
const Userdashboardheader = ({route}) => {
    const navigate = useNavigate()
    const [dropDown,setDropDown] = useState(false)
    const [userData, setUserData] = useState()

    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            const getData = async()=>{
                const req = await fetch(`${route}/api/getData`,{
                    headers: {
                    'x-access-token': localStorage.getItem('token')
                    }
                })
                const res = await req.json()
                setUserData(res)
                console.log(res)
            }
            
            getData()
        }
        else{
            navigate('/login')
        }
          
    },[])


    const [bgColor, setBgColor] = useState(false)
    const changeOnScroll = ()=>{
        if(window.scrollY >= 50){
            setBgColor(true)
        }
        else{
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeOnScroll)
  return (
    <>
        {
            dropDown &&
            <div className="drop-down" onBlur={()=>{
                setDropDown(false)
            }}>
                <div className="dropdown-tabs" onClick={()=>{
                   setDropDown(false)
                }}>
                    <AiOutlineClose />
                    <p>close</p>
                </div>
                <div className="dropdown-header">
                    <span className="profile-pic-container">
                        {userData && userData.profilepicture !== '' ? <img src={userData.profilepicture ? userData.profilepicture : ''} alt="" /> : userData.firstname.charAt(0)} 
                    </span>
                    <span className="dropdown-user-details">
                        <p className='dropdown-name'>{userData ? userData.firstname : 'john doe'}</p>
                        <p className='dropdown-email'>{userData ? userData.email : 'kelvinchukwuebuka385#gmail.com'}</p>
                    </span>
                </div>
                <div className="mobile-tabs">
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/dashboard')
                }}>
                    <RxDashboard />
                    <p>dashboard</p>
                </div>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/myprofile')
                }}>
                    <AiOutlineSetting />
                    <p>profile setting</p>
                </div>
                <div className="dropdown-tabs" onClick={()=>{
                    navigate('/myprofile')
                }}>
                    <RiLockPasswordLine />
                    <p>change password</p>
                </div>
                
                <div className="dropdown-tabs" onClick={()=>{
                   logout()
                }}>
                    <FiLogOut />
                    <p>logout</p>
                </div>
                
            </div>
        }
        <div  className={`userdashboard-header ${bgColor && 'scroll-head'}`}>
            <div className="userdashboard-logo-container">
            </div>
            <nav className='user-header-nav'>
                {/* <ul>
                    <li>
                        <Link to='/dashboard'>dashboard</Link>
                    </li>
                    <li>
                        <Link to='/referrals'>referrals</Link>
                    </li>
                </ul> */}
            </nav>
            <div className="header-profile-container" onClick={()=>{
                setDropDown(true)
            }}>
                <span className="user-icon-wrapper">
                    <BiUser />
                </span>
                <p>{userData ? userData.firstname : ''}</p>
                <span className="arrow-container">
                    <BiChevronDown />
                </span>
            </div>
        </div>
    </>
  )
}

export default Userdashboardheader