import React from 'react';
import '../App.css';
function Notification(){
    return(
        <div className="notification">
        <div className="container">
          <div className="row content">
            <div className="col-md-6 get-notified">
              <h2>Get notified when we update!</h2>
              <p>
                Get notified when we add new items to our specials menu, update
                our price list of have promos!
              </p>
            </div>
            <div className="col-md-6 input">
              <input type="text" />
              <button>Get Notified</button>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Notification;