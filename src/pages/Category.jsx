import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/contact/Contact'
const Category = () => {
  return (<>
    <Header />
      <div className="policy-container">
        <div className="policy-text-container">
          <h2>categories of individual membership</h2>
          <p>
              Individual membership of the College of Biomedical Engineering and Technology (CBET) progresses through the following categories, each earned through career development courses and years of professional practice:
          </p>
          <p><b>Student</b> — undergraduates studying biomedical engineering, medical physics or an allied discipline.</p>
          <p><b>Associate II</b> — entry category for new graduates and entrants into the profession.</p>
          <p><b>Associate I</b> — awarded after completing the mandatory intermediate career development courses.</p>
          <p><b>Graduate Member</b> — practising biomedical engineers who have satisfied the College's graduate examination requirements.</p>
          <p><b>Member</b> — full corporate membership for established professionals in clinical, academic, industry or government practice.</p>
          <p><b>Fellow</b> — the highest honour of the Institute and College, bestowed for distinguished professional and academic achievement.</p>
            </div>
      </div>
      <Contact />
      <Footer />
      </>
  )
}

export default Category