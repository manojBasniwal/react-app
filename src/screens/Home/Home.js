import Common from '../../components/Common'
import React from 'react'
import image from '../../images/Computer-Images.png'

function Home() {

    return (
        <>
          <Common 
          name=' Grow your business with'
          visit='/service'
          btname='Get Started'
          imgsrc={image} 
          />  
        </>
        
    )
}

export default Home
