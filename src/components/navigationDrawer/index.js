import React, { Component } from 'react'
import './style.css';
import UserProfile from '../userprofileblock';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import FormLayout from '../formlayout';

export default class NavigationDrawer extends Component {
  constructor() {
    super();
    this.state = {
      form_submenu: false,
      pages_submenu:false
    }
  }
  updateActiveMenu = (menu) => {
    if (menu === 'forms') {
      this.setState({ form_submenu: !this.state.form_submenu });
    }
   if(menu==='pages'){
      this.setState({ pages_submenu: !this.state.pages_submenu });
    }
    this.props.updateActiveMenu(menu);

  }
  render() {
    return (
      <div className="drawer">
        <UserProfile data={this.props.userdata} />
        <div className="drawer-list">

          <Link to='/dashboard' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("dashboard")}>
              <i class="material-icons list-icon-padding">
                dashboard
            </i>
              <div>DASHBOARD</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/apps' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("apps")}>
              <i class="material-icons list-icon-padding">
                apps
            </i>
              <div className="list-item-width">Apps</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/calender' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("calender")}>
              <i class="material-icons list-icon-padding">
                calendar_today
            </i>
              <div className="list-item-width">Calender</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/components' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("components")}>
              <i class="material-icons list-icon-padding">
                satellite
            </i>
              <div className="list-item-width">Components</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          {/* <Link to='/pages' style={{ textDecoration: 'none' }}> */}
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("pages")}>
              <i class="material-icons list-icon-padding">
                pages
              </i>
               <div className="list-item-width">pages</div>
               {
                 this.state.pages_submenu ?
                    <i class="material-icons list-item-arrow">
                    expand_more
                    </i>
                    :
                    <i class="material-icons list-item-arrow">
                    chevron_right
                    </i>
               }
            </div>
          {/* </Link> */}

          {
            this.state.pages_submenu ?
              <div className="subitems">
                {
                  this.props.subpage.map((item, index) => {
                    return (
                      <div>
                        <Link to={'/pages/' + index} style={{ textDecoration: 'none' }}>
                          <div key={index} className="list-subitem font-clr-white">{item.title}</div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
              : null
          }

          {/* <Link to='/forms' style={{ textDecoration: 'none' }}> */}
          <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("forms")}>
            <i class="material-icons list-icon-padding">
              file_copy
              </i>
            <div className="list-item-width">Forms</div>
            {
              this.state.form_submenu ?
                <i class="material-icons list-item-arrow">
                  expand_more
                  </i>
                :
                <i class="material-icons list-item-arrow">
                  chevron_right
                  </i>
            }
          </div>
          {/* </Link> */}

          {
            this.state.form_submenu ?
              <div className="subitems">
                {
                  this.props.subform.map((item, index) => {
                    return (
                      <div>
                        <Link to={'/forms/' + index} style={{ textDecoration: 'none' }}>
                          <div key={index} className="list-subitem font-clr-white">{item.title}</div>
                        </Link>
                      </div>

                    )
                  })
                }
              </div>
              : null
          }

          <Link to='/icons' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("icons")}>
              <i class="material-icons list-icon-padding">
                wb_sunny
            </i>
              <div className="list-item-width">Icons</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/location' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("location")}>
              <i class="material-icons list-icon-padding">
                place
            </i>
              <div className="list-item-width">Location</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

          <Link to='/mobileview' style={{ textDecoration: 'none' }}>
            <div className="font-clr-white listitem" onClick={() => this.updateActiveMenu("mobileview")}>
              <i class="material-icons list-icon-padding">
                adb
            </i>
              <div className="list-item-width">Mobile View</div>
              <i class="material-icons list-item-arrow">
                chevron_right
            </i>
            </div>
          </Link>

        </div>
      </div >
    )
  }
}
