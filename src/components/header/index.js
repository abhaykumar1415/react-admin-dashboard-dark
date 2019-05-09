import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="header-wrapper">
          <div className="search-icon margin">
            <div className="color-gray margin" >
              <i class="material-icons">
                search
             </i>
            </div >
            <div >
              <input className="color-gray"
                type="search"
                placeholder="Search" />
            </div>
          </div >
          <div className="menu-content-wrapper">
            <div>
              <i class="material-icons size-30">
                mail_outline
             </i>
            </div>
            <div>
              <i class="material-icons size-30">
                notifications_none
             </i>
            </div >
            <div className="profile-wrapper">
              <div>
                <i class="material-icons size-30 margin">
                  account_circle
                </i>
              </div>
              <div className="font-size">
                Leonid Aristov
             </div>
              <div><i class="material-icons size-30 margin">
                arrow_drop_down
               </i>
              </div >
            </div >
            <div>
              <i class="material-icons size-30">
                menu
             </i>
            </div >
          </div >
        </div >
      </div >
    )
  }
}
