import React, { Component } from 'react'
import './style.css';
export default class Activity extends Component {
  render() {
    return (
      <div className="activity-wrapper">
        <div className="task-activity-header">{this.props.activity_content.fourth_content_title}</div>
        <div className="activity-list">
          {
            this.props.activity_content.fourth_content_data.map((item, index) => {
              return (
                <div className="activity-content-wrapper" key={index}>
                  <img src={require('../../images/profile.png')} alt="profile" className="profile-image" />
                  <div className="activity-name">
                    <div className="activity-proofile-name font-weight">{item.title}</div>
                    <div className="description">
                      <div className="font-weight">{item.description}</div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="view-all-button">
          LOAD MORE
    </div>
      </div>
    )
  }
}
