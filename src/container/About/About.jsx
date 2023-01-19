import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { data } from './aboutData'

import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    setAbouts(data)
  }, [])

  return (
    <>
      <h2 className="head-text">
        Getting a quality
        <span> Website</span>
        <br />
        is not an expenses but rather an
        <span> Investment</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((d, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, typr: 'tween' }}
            className="app__profile-item"
            key={d.title + index}
          >
            <img src={d.imageUrl} alt={d.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {d.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 0 }}>
              {d.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
