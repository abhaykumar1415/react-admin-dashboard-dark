import React, { Component } from 'react'


export default class UserProfile extends Component {
  editprofile = () => {

  }
  updateProfile = () => {

  }
  render() {
    return (
      <div className="drawer-profile">
        <div className="image-profile-name">
          <img src={require('../../images/profile.png')} alt="profile" className="profile-img" />
          <div className="profile-name">
            <span className="font-clr-white">{this.props.data.name}</span><br />
            <span className="font-clr-whitesmoke user-role">{this.props.data.role}</span>
          </div>
        </div>
        <div>
          <button className="edit-button" onClick={this.editProfile}>Edit Profile</button>
          <button className="upgrade-button" onClick={this.updateProfile}>Upgrade</button>
        </div>
      </div>
    )
  }
}
