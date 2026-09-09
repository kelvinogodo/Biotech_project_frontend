import React from 'react'
import './userdashboardhomepage.css'
import { BsArrowRightShort } from 'react-icons/bs'
import {MdOutlineDone} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import {IoIosArrowRoundUp,IoIosArrowRoundDown} from 'react-icons/io'
import {MdOutlineContentCopy} from 'react-icons/md'
import {FiLink} from 'react-icons/fi'
const Userdashboardhomepage = ({route}) => {
    const navigate = useNavigate()
    const [clipBoard, setClipBoard] = useState(false)
    const [userData, setUserData] = useState()
    const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
    useEffect(()=>{
        setLoader(true)
        if(localStorage.getItem('token')){
            const getData = async()=>{
                const req = await fetch(`${route}/api/getData`,{
                    headers: {
                    'x-access-token': localStorage.getItem('token')
                    }
                })
                const res = await req.json()
                setUserData(res)

                if (res.status === 'error') {
                    navigate('/login')
                }
                setLoader(false) 
            }
            getData()
        }
        else{
            navigate('/login')
        }
    },[])
  return (
    <div className='homewrapper'>
      {
        loader &&
          <div className="wifi-loader-container">
            <div class="loader">
              <span class="l">B</span>
              <span class="o">i</span>
              <span class="a">o</span>
              <span class="d">m</span>
              <span class="i">e</span>
              <span class="n">d</span>
              <span class="g">i</span>
              <span class="d1">c </span>
              <span class="d2">a</span>
              <span class="d3">l</span>
            </div>
        </div>
      }
    <div className='dashboardhomepage'>
       
        <div className="dashboardhomepagewrapper">
            <div className="welcome-kyc-section">
                <p>welcome!</p>
                <div className="username-container">
                    <h2>{userData ? `${userData.firstname} ${userData.lastname}` : ''}</h2>
                </div>
            </div>
            <div className="overview-container">
                <div className="overview-card">
                    <div className="amount-header">
                        <h2>membership category</h2>
                        <div className="amount-holder">
                            <h3>{userData ? userData.membertype : ''}</h3>
                        </div>
                    </div>
                </div>
                <div className="overview-card">
                <div className="amount-header">
                        <h2>colleagues referred</h2>
                        <div className="amount-holder">
                            <h3>{userData && userData.referred ? userData.referred.length : 0}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Userdashboardhomepage