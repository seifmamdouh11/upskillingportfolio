import React from 'react'
import './Skills.css'
export default function Skills() {
  return (
    <div className="container skills vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="content w-75 mx-auto my-4 h-auto text-start">
        <h2 className='fw-bold text-uppercase'>MY SPECIALTY</h2>
        <h3 className='fs-5 mt-4 mb-5'>MY SKILLS</h3>
        <p className=''>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>
      </div>
      <div className="row w-75 g-4 ">
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>Photoshop</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro1 progress-bar bg-primary" style={{ width: '75%' }} />
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>jQuery</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro2 progress-bar bg-danger" style={{ width: '60%' }} />
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>HTML5</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro3 progress-bar bg-warning" style={{ width: '85%' }} />
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>CSS3</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro4 progress-bar" style={{ width: '90%' }} />
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>Wordpress</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro5 progress-bar bg-success" style={{ width: '60%' }} />
          </div>
        </div>
        <div className="col-md-6 ps-0">
          <span className='fw-bolder'>SEO</span>
          <div className="progress mt-2" role="progressbar" aria-label="" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
            <div className="pro6 progress-bar bg-info" style={{ width: '80%' }} />
          </div>
        </div>

      </div>
    </div>
  )
}
