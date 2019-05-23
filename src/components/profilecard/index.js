import React, { Component } from 'react'
import "./style.css";

export default class ProfileCard extends Component {
  render() {
    return (
      <div className="user-profile">
        <div className="profile-img-div"><img src={this.props.user_profile.image} alt="" className="user-profile-img" /></div>
        <div className="user-name">{this.props.user_profile.title}</div>
        <div className="user-role clr_darkgray">{this.props.user_profile.role}</div>
        <div className="user-email">{this.props.user_profile.email}</div>
        {/* <div>
                <Button buttonType="Filled" color='#3E3F53' title='Message' padding='' />
                <Button buttonType="Outline" color='#3E3F53' title='View Profile' />
              </div> */}
      </div>
    )
  }
}
