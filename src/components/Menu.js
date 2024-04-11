import React from 'react';
import '../App.css';
import Bitterleaf from "../images/bitterleaf soup.jpg";
import Foreigndish from "../images/foreign dish-2048x2048.jpg";
import Veggies from "../images/veggies-2048x2048.jpg";
import Japanese from "../images/japanese fried.jpg";
import Okro from "../images/okro soup.jpg";
import Friedrice from "../images/fried-rice.jpg";
import Decameal from "../images/decameal.png";
import Oha from "../images/oha.png";
import {Link} from "react-router-dom";
function Menu(){
    return(
        <div className="menu">
        <div className="desc">
          <h2>Our Menu</h2>
          <p>
            Fish is one of the most wholesome foods that man can eat. In fact,
            people have been eating fish throughout human
          </p>
        </div>
        <div className="container">
          <div className="row main">
            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Bitterleaf} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Foreigndish} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Veggies} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Japanese} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Okro} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Friedrice} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Decameal} alt="..." />
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

            <div className="col-md-4 col-lg-3 card-box">
              <div className="card">
                <img src={Oha} alt="..." />
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
export default Menu;