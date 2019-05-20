import React, { Component } from 'react';
import './style.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  handelClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log("helo");
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <div className="main-wrapper">
        <div className="header-wrapper">
          <div className="search-icon margin">
            <div className="color-gray margin" >
              <i className="material-icons font-size-30">
                search
             </i>
            </div >
            <div >
              <input className="color-gray"
                type="search"
                placeholder="Search" />
            </div>
          </div>
          <div className="menu-content-wrapper">
            <i className="material-icons size-30">
              mail_outline
            </i>
            <i className="material-icons size-30">
              notifications_none
            </i>
            <div className="profile-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-img-header" />
              <div className="font-size">
                <h4> Leonid Aristov</h4>
              </div>
              <div className="logout">
                <i className="material-icons size-30 margin " onClick={this.handelClick} >
                  arrow_drop_down
                </i>
              </div>
            </div>
            <div>
              <i className="material-icons size-30">
                menu
              </i>
            </div>
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseMenu}
        >
          <MenuItem onClick={this.handleCloseMenu}>New Post</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Task</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Setting</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Help</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Log Out</MenuItem>

        </Menu>

      </div >
    )
  }
}
