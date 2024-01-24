import React from 'react'
import image from '../../images/Computer-Images.png'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <section className='home-container'>
            <div className="container">
                <div className="row">
                        <div className='text-container col-md-6 pt-5 pt-lg-0 order-2 order-md-1'>
                            <h1>
                                Grow your business width
                                <strong className='brand-name'> ManojBasniwal</strong>
                            </h1>
                            <h3 className='text my-3'>
                                We are the team of telented devlopers making website 
                            </h3>
                            <div className='mt-3'>
                                <NavLink to="/service " className='btn btn-primary'>
                                    Get Started
                                </NavLink>
                            </div>
                        </div>
                        <div className='img-container col-md-6 order-1 order-md-2'>
                            <img src={image} className='img-box animated' alt='img'/>
                        </div>
                </div>
            </div>

        </section>
    )
}

export default Home
