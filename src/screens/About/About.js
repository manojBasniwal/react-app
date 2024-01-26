import Common from 'components/Common'
import React from 'react'
import image from '../../images/Web-Designing-Images.png'

function About() {
  return (
    <div>
      <Common
       name=' Welcome to About page'
       visit='/contact'
       btname='Contact Now'
       imgsrc={image} 
      />
    </div>
  )
}

export default About
