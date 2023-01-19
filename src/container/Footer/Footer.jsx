import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useRef()

  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    emailjs
      .sendForm(
        'service_hntvhyp',
        'template_7dn769g',
        form.current,
        '7W6MZvcKuz_npwitf',
      )
      .then(
        (result) => {
          setLoading(false)
          setIsFormSubmitted(true)
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <h2 className="head-text">
        You have questions I can anwser,
        <br /> <span>ask right away</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:samuelasiabaka@gmail.com" className="p-text">
            samuelasiabaka@gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 (705) 406-3569" className="p-text">
            +234 (705) 406-3569
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              required
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              required
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              required
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)
