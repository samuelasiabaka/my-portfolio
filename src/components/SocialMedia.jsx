import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/samuel-asiabaka-6679b520a/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/samuelasiabaka"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://web.facebook.com/samuel.asiabaka"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
