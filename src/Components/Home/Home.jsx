import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner h-100 homeContainer">
        <div className="carousel1 carousel-item carousels active " data-bs-interval="2000">
          <div className="content container w-75 d-flex justify-content-center flex-column h-100">
            <h1 className='fw-bold mb-3'>Hi! <br /> I'm Seif</h1>
            <p className='fs-5 mb-4'>100% html5 bootstrap templates Made <br /> By <a href="">Colorlib.com</a></p>
            <button className='btn btn-transparent border border-dark rounded-0 py-2'>Download CV <i className='fa fa-download'></i></button>
          </div>
        </div>
        <div className="carousel2 carousel-item carousels" data-bs-interval="2000">
          <div className="content container w-75 d-flex justify-content-center flex-column h-100">
            <h1 className='fw-bold mb-3'>I'm<br /> a Designer</h1>
            <p className='fs-5 mb-4'>100% html5 bootstrap templates Made <br /> By <a href="">Colorlib.com</a></p>
            <button className='btn btn-transparent border border-dark rounded-0 py-2'>View Portfolio <i className='fa fa-briefcase'></i></button>
          </div>
        </div>
      </div>
    </div>

  )
}
