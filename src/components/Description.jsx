import React from 'react'
import { Link } from "react-router-dom";
import img1 from './company1.jpg'
import img2 from './company2.jpg'
import img3 from './company3.jpg'
const Description = () => {
  return (
    <div>
      <div className="description">
        
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="value-prop">
          <div className="container">
            <div className="sec-title text-center">
              <h2>Heading</h2>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="postjob">
                  <div className="head-sec">
                    <h3 className='title'>Employers</h3>
                  </div>
                  <div className="btm-sec">
                      <ul>
                        <li><i class="fa-solid fa-circle-check"></i> Post your required Jobs</li>
                        <li><i class="fa-solid fa-circle-check"></i> Recruit people</li>
                      </ul>
                      <button className="btn"><Link className='hirejobs' to="/postemployer"><i class="fa-solid fa-suitcase"></i> Post a Job</Link></button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="postjob">
                  <div className="head-sec">
                    <h3 className='title'>Employees</h3>
                  </div>
                  <div className="btm-sec">
                      <ul>
                        <li><i class="fa-solid fa-circle-check"></i> Search for your Jobs</li>
                        <li><i class="fa-solid fa-circle-check"></i> Get your Job</li>
                      </ul>
                      <button className="btn"><Link className='getjobs' to="/testemployer"><i class="fa-solid fa-magnifying-glass"></i> Search for jobs</Link></button>
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

export default Description
