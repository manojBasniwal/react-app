import React from 'react'
import { NavLink } from 'react-router-dom'
import CardsData from 'components/CardsData'

function Service() {
    return (
        <div className='container mt-3 mb-4'>
            <h2 className='text-center mb-5'>Our Services</h2>
            <div className='row gy-4 d-flex justify-content-center align-items-center'>
                {
                    CardsData.map((element, ind) => {
                        // console.log(CardsData,'manoj')
                        return (
                            <>
                                <div className='col-md-4 card-container'>
                                    <div className="card">
                                        <img src={element.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{element.title}</h5>
                                            <p className="card-text">{element.text}</p>
                                            <NavLink to=" " className="btn btn-primary">Go somewhere</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Service
