import React from 'react';
import '../App.css';
import Onionjollof from "../images/onion-jollof.png";
import Friedrice from "../images/fried-rice.jpg";
import Localjollof from "../images/local jollof.jpg";


function Diettips(){
    return(
        <div className="diet-tips">
        <div className="container">
          <div className="row main-box">
            <div className="col-md-6">
              <div className="container">
                <div className="row image">
                  <div className="col-md-6 jollof">
                    <img src={Onionjollof} alt="" />
                  </div>
                  <div className="col-md-6 images">
                    <img src={Friedrice} alt="" />
                    <img src={Localjollof} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 desc">
              <div className="body">
                <h3>Diet Tips for the Day</h3>
                <p>
                  Fish is one of the most wholesome foods that man can eat. In
                  fact, people have been eating fish throughout human history.
                  These days, many cooks yearn Fish is one of the most
                  wholesome foods that man can eat. In fact,
                </p>
                <p>
                  Fish is one of the most wholesome foods that man can eat. In
                  fact, people have been eating fish throughout human history.
                  These days, many cooks yearn Fish is
                </p>
                <button>Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Diettips;