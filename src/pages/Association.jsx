import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/contact/Contact'

const Association = () => {
  return (<>
    <Header />
      <div className="policy-container">
        <div className="policy-text-container">
          <h2>NABET</h2>
          <p>
              The Association of Biomedical Engineers and Technologists of Nigeria (NABET) is the affiliate wing of the Nigerian Institute for Biomedical Engineering through which companies and corporate organisations engaged in biomedical engineering, health technology and allied industries formally partner with NIBE.<br/><br/>
              Corporate affiliation with NABET gives organisations a recognised voice within the profession, access to NIBE's technical committees and events, and a channel for supporting the training and certification standards administered by the College of Biomedical Engineering and Technology (CBET).<br/><br/>
              Organisations interested in affiliate membership can visit the Association's official site at <a href="https://www.nabet.org.ng/">nabet.org.ng</a> for registration categories and requirements.
            </p>
            </div>
      </div>
      <Contact />
      <Footer />
      </>
  )
}

export default Association