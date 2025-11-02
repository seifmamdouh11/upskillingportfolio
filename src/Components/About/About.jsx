import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
      <div className="container about vh-100">
        <div className="content w-75 mx-auto text-start">
          <h2 className='fw-bold text-uppercase'>About Us</h2>
          <h3 className='fs-4 mt-4'>Who Am I?</h3>
          <p className='mt-5'>
            <span className='fw-bold'>Hi 'm Jackson Ford</span> On her way, she met a copy. The copy warned the Little Blind Text that where it came from, it would have been rewritten a thousand times, and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.
          </p>
          <p className='mt-4'>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
          <div className="cards mt-4">
            <div className="row">
              <div className="col-md-3">
                <div className="card card1  text-start p-4">
                  <i className='fa-regular fa-lightbulb fs-3 text-primary'></i>
                  <h3 className='fs-6 my-4'>Graphic Design</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card2  text-start p-4">
                  <i className='fa-solid fa-earth-africa fs-3 text-danger'></i>
                  <h3 className='fs-6 my-4'>Web Design</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card3  text-start p-4">
                  <i className='fa-solid fa-database fs-3 text-warning'></i>
                  <h3 className='fs-6 my-4'>Software</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card4  text-start p-4">
                  <i className='fa-solid fa-mobile-screen-button fs-3'></i>
                  <h3 className='fs-6 my-4'>Software</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
