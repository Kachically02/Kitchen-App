import React from 'react';
import '../App.css';
import Testimonial1 from "../images/testimonialimg1.jpg";
import Testimonial2 from "../images/testimonialimg2.jpg";
function Testimonial(){
    return(
        <div className="testimonial">
        <div className="container">
          <div className="row cards">
            <div className="col-md-6 card">
              <img src={Testimonial1} alt="" />
              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <h3>Rahim Khan</h3>
            </div>
            <div className="col-md-6 card">
              <img src={Testimonial2} alt="" />
              <div className="rating">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </p>
              <h3>Usman Shand</h3>
            </div>
          </div>
        </div>
      </div>
    );
}




export default Testimonial;