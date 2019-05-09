import React, { Component } from 'react'
import './style.css';
export default class NavigationDrawer extends Component {
  render() {
    return (
      <div className="drawer">
        <div className="drawer-profile">
          <img src={require('../../images/profile.png')} alt="profile" className="profile-img" />
          <div className="profile-name">
            <span className="font-clr-white">Leonid Aristov</span><br />
            <span className="font-clr-whitesmoke user-role">Project Manager</span>
          </div>
        </div>
        <div className="drawer-list">
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              dashboard
            </i>
            <span>DASHBOARD</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              apps
            </i>
            <span>Apps</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              calendar_today
            </i>
            <span>Calender</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              satellite
            </i>
            <span>Components</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              pages
            </i>
            <span>Pages</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              wb_sunny
            </i>
            <span>Icons</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              place
            </i>
            <span>Location</span>
          </div>
          <div className="font-clr-white listitem" >
            <i className="material-icons list-padding">
              adb
            </i>
            <span>Mobile View</span>
          </div>
        </div>
      </div>
    )
  }
}
