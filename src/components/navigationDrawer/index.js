import React, { Component } from 'react'
import './style.css';
import UserProfile from '../userprofileblock';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default class NavigationDrawer extends Component {

  updateActiveMenu = (menu) => {
    this.props.updateActiveMenu(menu);
  }
  render() {
    return (
      <div className="drawer">
        <UserProfile data={this.props.userdata} />
        <div className="drawer-list">

          <Link to='/dashboard' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem">
              <i className="material-icons list-icon-padding">
                dashboard
            </i>
              <div>DASHBOARD</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/apps' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" >
              <i className="material-icons list-icon-padding">
                apps
            </i>
              <div className="list-item-width">Apps</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/calender' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("calender")}>
              <i className="material-icons list-icon-padding">
                calendar_today
            </i>
              <div className="list-item-width">Calender</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/components' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("components")}>
              <i className="material-icons list-icon-padding">
                satellite
            </i>
              <div className="list-item-width">Components</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/pages' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("pages")}>
              <i className="material-icons list-icon-padding">
                pages
            </i>
              <div className="list-item-width">Pages</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/forms' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" >
              <i className="material-icons list-icon-padding">
                file_copy
            </i>
              <div className="list-item-width">Forms</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/table' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("table")}>
              <i className="material-icons list-icon-padding">
                pages
               </i>
              <div className="list-item-width">Table</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/icons' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("icons")}>
              <i className="material-icons list-icon-padding">
                wb_sunny
            </i>
              <div className="list-item-width">Icons</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/location' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("location")}>
              <i className="material-icons list-icon-padding">
                place
            </i>
              <div className="list-item-width">Location</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/mobileview' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("mobileview")}>
              <i className="material-icons list-icon-padding">
                adb
            </i>
              <div className="list-item-width">Mobile View</div>
              <i className="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

        </div>
      </div >
    )
  }
}
