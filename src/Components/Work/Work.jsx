import React from 'react'
import './Work.css'
export default function Work() {
    return (
        <div className='bg-white  py-5 px-5 container'>
            <div className=" content" style={{ marginLeft: "70px" }}>
                <h2 className='fw-bold text-uppercase'>MY WORK</h2>
                <h3 className='fs-4 mt-4'>RECENT WORK</h3>
            </div>
            <div className="work-tabs ms-5 mt-5">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Graphic Design</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">App</button>
                    </li>
                </ul>
                <div className="tab-content p-3" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                        <div className="row gy-4">
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                        <div className="row gy-4">
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 card01 position-relative overflow-hidden p-0">
                                <img src="https://react-portfolio-gold-psi.vercel.app/assets/img-1-C4nS0eD8.jpg" alt="" className='container rounded h-100 w-100' />
                                <div className="image-cover p-5 position-absolute top-0 start-0 end-0 bottom-0 w-100 h-100 bg-info ">
                                    <a href="#" className='text-light d-block mb-4 '>WORK #</a>
                                    <span className='text-light opacity-50'>animation</span>
                                    <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
