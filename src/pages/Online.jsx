import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/contact/Contact'
const Online = () => {
   return (<>
    <Header />
      <div className="policy-container">
        <div className="policy-text-container">
          <h2>online courses</h2>
          <p>
              NIBE's online Career Development Courses (CDC) let members complete the mandatory continuing professional development requirements of the College of Biomedical Engineering and Technology (CBET) from anywhere in the world.<br/><br/>
              Courses cover clinical engineering practice, medical device maintenance and safety, biomedical instrumentation, healthcare technology management, and the regulatory standards governing biomedical engineering practice in Nigeria.<br/><br/>
              Members who complete a course earn CPD credit hours toward their transfer to the next category of College membership. Course schedules and registration are announced on the News page and communicated directly to registered members.
            </p>
            </div>
      </div>
      <Contact />
      <Footer />
      </>
  )
}

export default Online