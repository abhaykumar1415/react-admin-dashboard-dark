import React, { Component } from 'react'
import './style.css';
export default class SocialButtons extends Component {
  render() {
    return (
      <div className="social_buttons_main_wrapper">
        <div className="color-white button-style font-size-small font-weight margin-bottom">{this.props.title}</div>
        <div className="social_buttons_wrapper">
          <div className="color-white padding font-size-small font-weight">Small</div>
          <div className="social_images_wrapper">
            <img src={require('../../images/twitter.png')} alt="twitter" className="small_icons" />
            <img src={require('../../images/facebook.png')} alt="twitter" className="small_icons" />
            <img src={require('../../images/g+.png')} alt="twitter" className="small_icons" />
            <img src={require('../../images/color-twitter.png')} alt="twitter" className="small_icons" />
            <img src={require('../../images/blue-facebook.png')} alt="twitter" className="small_icons" />
            <img src={require('../../images/google+.jpeg')} alt="twitter" className="small_icons" />
          </div>
          <div className="color-white padding font-size-small font-weight">Large</div>
          <div className="social_images_wrapper">
            <img src={require('../../images/twitter.png')} alt="twitter" className="large_icons" />
            <img src={require('../../images/facebook.png')} alt="twitter" className="large_icons" />
            <img src={require('../../images/g+.png')} alt="twitter" className="large_icons" />
            <img src={require('../../images/color-twitter.png')} alt="twitter" className="large_icons" />
            <img src={require('../../images/blue-facebook.png')} alt="twitter" className="large_icons" />
            <img src={require('../../images/google+.jpeg')} alt="twitter" className="large_icons" />
          </div>
        </div>
      </div>
    )
  }
}
