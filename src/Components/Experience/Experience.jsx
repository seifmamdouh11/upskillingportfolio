import React from 'react'
import './Experience.css'
export default function Experience() {
    return (
        <div className='experience  container py-5 bg-white'>
            <div className=" content mb-5" style={{marginLeft:"100px"}}>
                <h2 className='fw-bold text-uppercase'>EXPERIENCE</h2>
                <h3 className='fs-4 mt-4'>WORK EXPERIENCE</h3>
            </div>
            <div className="timeline position-relative">
                <ul className="timeline-items">
                    <div className="timeline-item container bg-light w-75 p-4 mb-4 rounded position-relative">
                        <div className="timeline-icon p-absolute bg-primary">
                            <i className='fa fa-pencil fs-5'></i>
                        </div>
                        <h2 className='d-inline me-3 fs-5 uppercase'>Full Stack Developer</h2>
                        <span className='opacity-50'>2017-2018</span>
                        <p className='mt-5'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                    <div className="timeline-item container bg-light w-75 p-4 mb-4 rounded position-relative">
                        <div className="timeline-icon p-absolute bg-danger">
                            <i className='fa fa-pencil fs-5'></i>
                        </div>
                        <h2 className='d-inline me-3 fs-5 uppercase'>Front End Developer at Google Company</h2>
                        <span className='opacity-50'>2017-2018</span>
                        <p className='mt-5'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                    <div className="timeline-item container bg-light w-75 p-4 mb-4 rounded position-relative">
                        <div className="timeline-icon p-absolute bg-warning">
                            <i className='fa fa-pencil fs-5'></i>
                        </div>
                        <h2 className='d-inline me-3 fs-5 uppercase'>System Analyst </h2>
                        <span className='opacity-50'>2017-2018</span>
                        <p className='mt-5'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}
