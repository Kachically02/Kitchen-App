import React from 'react';
import '../App.css';
import Playstore from "../images/playstore.f23c3dcbde32e767203274d4b1749cc7.svg";
import Appstore from "../images/appstore.b464860c93223b3fc15fc7d026bcdca0.svg";
import {Link} from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
        <div className="container">
          <div className="row section1">
            <div className="col-md-3 help">
              <h4>Company</h4>
              <Link href=""><span>About Us</span></Link>
              <Link href=""><span>Careers</span></Link>
              <Link href=""><span>Contact Us</span></Link>
            </div>
            <div className="col-md-3 help">
              <h4>Support</h4>
              <Link href=""><span>Help Center</span></Link>
              <Link href=""><span>Safety Center</span></Link>
            </div>
            <div className="col-md-3 help">
              <h4>Legal</h4>
              <Link href=""><span>Cookies Policy</span></Link>
              <Link href=""><span>Privacy Policy</span></Link>
              <Link href=""><span>Terms of Service</span></Link>
              <Link href=""><span>Dispute Resolution</span></Link>
            </div>
            <div className="col-md-3 download">
              <h4>Install App</h4>
              <Link href=""
                ><img
                  src={Playstore}
                  alt="playstore icon"
              /></Link>
              <Link href=""
                ><img
                  src={Appstore}
                  alt=""
              /></Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row last-section">
            <div className="col-md-6">
              <p>© 2024 DECAMEAL, All rights reserved</p>
            </div>
            <div className="col-md-6 icon">
              <Link href=""><i className="bi bi-instagram"></i></Link>
              <Link href=""><i className="bi bi-twitter"></i></Link>
              <Link href=""><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Footer;