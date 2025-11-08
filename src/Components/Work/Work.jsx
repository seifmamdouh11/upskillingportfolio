import React from 'react'
import './Work.css'
import img1 from '../../images/img-1-C4nS0eD8.jpg'
import img2 from '../../images/img-2-D-4H1m4L.jpg'
import img3 from '../../images/img-3-pR2ZEVY9.jpg'
import img4 from '../../images/img-4-tHccITd-.jpg'
export default function Work() {
    return (
        <div className='work bg-white container'>
            <div className="content container w-75 mx-auto text-start p-0">
                <div className=" content container">
                    <h2 className='fw-bold text-uppercase'>MY WORK</h2>
                    <h3 className='fs-4 mt-4'>RECENT WORK</h3>
                </div>
                <ul class="nav nav-pills my-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div className="row m-auto g-3">
                            <div className="col-md-6 overflow-hidden">
                                <div className="work-card">
                                    <img src={img1} alt="work1" className='container h-100 object-fit-cover w-100' />
                                    <div className="img-cover">
                                        <h2 className='fs-6'>WORK  01</h2>
                                        <span>Animation</span>
                                        <div className="icons position-absolute d-flex align-items-center gap-2">
                                            <div className="icon">
                                                <i className="fa fa-share-nodes"></i>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-eye me-1"></i>
                                                <span>100</span>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 overflow-hidden">
                                <div className="work-card">
                                    <img src={img2} alt="work1" className='container h-100 object-fit-cover w-100' />
                                    <div className="img-cover">
                                        <h2 className='fs-6'>WORK  02</h2>
                                        <span>Animation</span>
                                        <div className="icons position-absolute d-flex align-items-center gap-2">
                                            <div className="icon">
                                                <i className="fa fa-share-nodes"></i>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-eye me-1"></i>
                                                <span>100</span>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 overflow-hidden">
                                <div className="work-card">
                                    <img src={img3} alt="work1" className='container h-100 object-fit-cover w-100' />
                                    <div className="img-cover">
                                        <h2 className='fs-6'>WORK  03</h2>
                                        <span>Animation</span>
                                        <div className="icons position-absolute d-flex align-items-center gap-2">
                                            <div className="icon">
                                                <i className="fa fa-share-nodes"></i>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-eye me-1"></i>
                                                <span>100</span>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 overflow-hidden">
                                <div className="work-card">
                                    <img src={img4} alt="work1" className='container h-100 object-fit-cover w-100' />
                                    <div className="img-cover">
                                        <h2 className='fs-6'>WORK  04</h2>
                                        <span>Animation</span>
                                        <div className="icons position-absolute d-flex align-items-center gap-2">
                                            <div className="icon">
                                                <i className="fa fa-share-nodes"></i>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-eye me-1"></i>
                                                <span>100</span>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><div className="row m-auto g-3">
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img1} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  01</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img2} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  02</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img3} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  03</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img4} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  04</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><div className="row m-auto g-3">
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img1} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  01</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img2} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  02</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img3} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  03</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 overflow-hidden">
                            <div className="work-card">
                                <img src={img4} alt="work1" className='container h-100 object-fit-cover w-100' />
                                <div className="img-cover">
                                    <h2 className='fs-6'>WORK  04</h2>
                                    <span>Animation</span>
                                    <div className="icons position-absolute d-flex align-items-center gap-2">
                                        <div className="icon">
                                            <i className="fa fa-share-nodes"></i>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-eye me-1"></i>
                                            <span>100</span>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-regular fa-heart fa-beat me-1" style={{ '--fa-animation-duration': '2s' }}></i>
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
