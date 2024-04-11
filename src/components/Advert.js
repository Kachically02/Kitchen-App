import React from 'react';
import '../App.css';
import Chicken from "../images/chicken.png";
import Egusi from "../images/Egusi.png";
import Afang from "../images/Afang.png";
import {Link} from "react-router-dom";
function Advert(){
    return(
        <div className="advert">
          <h2>Meals for your satisfaction</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4 card-box">
                <div className="card">
                  <img src={Chicken} alt="..." />
                  <div className="rating">
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-half icon"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Spicey meatballs</h5>
                    <p className="card-text">
                      Aenean commodo ligula eget dolor aenean massa. Cum sociis
                      natoque
                    </p>
                    <Link href="#" className="btn">Read more</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-box">
                <div className="card">
                  <img src={Egusi} alt="..." />
                  <div className="rating">
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-half icon"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Spicey meatballs</h5>
                    <p className="card-text">
                      Aenean commodo ligula eget dolor aenean massa. Cum sociis
                      natoque
                    </p>
                    <Link href="#" className="btn">Read more</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-box">
                <div className="card">
                  <img src={Afang} alt="..." />
                  <div className="rating">
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-fill icon"></i>
                    <i className="bi bi-star-half icon"></i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Spicey meatballs</h5>
                    <p className="card-text">
                      Aenean commodo ligula eget dolor aenean massa. Cum sociis
                      natoque
                    </p>
                    <Link href="#" className="btn">Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-button">
            <button>Explore Menu</button>
          </div>
        </div>
    );
}
export default Advert;