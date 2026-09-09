import React from 'react'
import './contact.css'
import {FaPhone,FaTelegramPlane} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
    
    // sweet alert function 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ljiy8n', 'template_hr6ase7', form.current, 'u__c9CcKEVKgaRN5U')
        .then(() => {
            form.current.reset();
        })
        .then((result) => {
            console.log(result.text);
            Toast.fire({
                icon: 'success',
                title: 'Email sent successfully'
              })
        }, (error) => {
            console.log(error.text);
            Toast.fire({
                icon: 'error',
                title: 'something went wrong'
              })
        });
    };


  return (
    <div className='contact-section' id='contact'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text contact-p" >
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h3>contact us</h3>
            </div>
            <h1 data-aos="fade-up">get in touch</h1>
            <p data-aos="fade-up">
                Any question? Reach out to us and we’ll get back to you shortly.
            </p>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FaPhone />
                </div>
                <div className="contact-card-text">
                    <p>+234-803-8795184</p>
                </div>
            </div>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FiMail />
                </div>
                <div className="contact-card-text">
                    <p>nigeriabme@gmail.com</p>
                </div>
            </div>
            <div className="contact-card" data-aos="fade-up">
                <div className="ball contact-ball">
                    <FaTelegramPlane />
                </div>
                <div className="contact-card-text">
                    <p>chat us on whatsapp</p>
                </div>
            </div>
        </div>
        <div className="contact-form-container">
            <form ref={form} className="contact-form" data-aos="fade-up" onSubmit={sendEmail}>
                <p className="contact-form-title">Get In Touch </p>
                <p className="message">type in your message in the form below </p>
                    <div className="flex">
                    <label>
                        <input required placeholder="" type="text" name="firstname" className="contact-form-input" />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required placeholder="" type="text" name="lastname" className="contact-form-input" />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input required placeholder="" type="email" name="email" className="contact-form-input" />
                    <span>Email</span>
                </label>

                <label>
                    <textarea required placeholder="" name="message" className="contact-form-input" rows="4"></textarea>
                    <span>Message</span>
                </label>
                <button className="contact-form-submit" type="submit">SEND</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact