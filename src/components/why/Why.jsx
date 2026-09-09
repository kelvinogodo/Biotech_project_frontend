import React from 'react'
import './why.css'
const Why = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>upcoming events</h2>
            </div>
            <h1 data-aos="fade-up">expect amazing events</h1>
            <p data-aos="fade-up">Electrifying events organised by  Nigerian Institute for Biomedical Engineering</p>
        </div>
        <div className="why-choose-us-card-container">
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">01</span>
                <h2>Hybrid 2024 Career Development Course.</h2>
                <p>Members can join in person or online to complete mandatory CBET career development courses and earn CPD credit toward the next membership category.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">02</span>
                <h2>NABET holds her AGM in Owerri, Nigeria, April 03, 2024.</h2>
                <p>Corporate affiliate members and industry partners gather in Owerri for NABET's Annual General Meeting to review the year and set the profession's agenda.</p>
            </div>
            <div className="why-choose-us-card" data-aos="fade-up">
                <span className="card-counter">03</span>
                <h2>World Congress on Medical Physics and Biomedical Engineering.</h2>
                <p>NIBE fellows and members join biomedical engineers from around the world to present research and share advances in medical physics and healthcare technology.</p>
            </div>
        </div>
    </div>
  )
}

export default Why