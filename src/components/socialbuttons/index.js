import React, { Component } from 'react'
import './style.css';
export default class SocialButtons extends Component {
  render() {
    return (
      <div className="social_buttons_main_wrapper">
        {/* Social Buttons */}
        <div className="social_buttons">
          <div className="color-white button-style font-size-small font-weight margin-bottom">Social Buttons</div>
          <div className="social_buttons_wrapper">
            <div className="color-white padding font-size-small font-weight">Small</div>
            <div className="social_images_wrapper">
              <img src={require('../../images/Twitter-logo-300x300.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/facebook-logo-gray.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/google_plus.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/twitter-large.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/blue-facebook.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/google+.jpeg')} alt="twitter" className="small_icons" />
            </div>
            <div className="color-white padding font-size-small font-weight">Large</div>
            <div className="social_images_wrapper">
              <img src={require('../../images/Twitter-logo-300x300.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/facebook-logo-gray.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/google_plus.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/twitter-large.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/blue-facebook.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/google+.jpeg')} alt="twitter" className="large_icons" />
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="social_icons">
          <div className="color-white button-style font-size-small font-weight margin-bottom">Icons</div>
          <div className="social_buttons_wrapper">
            <div className="color-white padding font-size-small font-weight">Small</div>
            <div className="social_images_wrapper">
              <img src={require('../../images/plus-symbol.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/download-x.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/reload.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/plus_color (1).png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/blue-facebook.png')} alt="twitter" className="small_icons" />
              <img src={require('../../images/reload-color.png')} alt="twitter" className="small_icons" />
            </div>
            <div className="color-white padding font-size-small font-weight">Large</div>
            <div className="social_images_wrapper">
              <img src={require('../../images/plus-symbol.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/download-x.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/reload.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/plus_color (1).png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/blue-facebook.png')} alt="twitter" className="large_icons" />
              <img src={require('../../images/reload-color.png')} alt="twitter" className="reload_icons" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
