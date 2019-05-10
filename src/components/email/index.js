import React, { Component } from 'react'
import './style.css';
export default class Email extends Component {
  render() {
    return (
      <div className="email-wrapper">
        <div className="email-header color">{this.props.email_content.first_content_title}</div>
        {
          this.props.email_content.first_content_data.map((item, index) => {
            return (
              <div key={index}>
                <div className="rate color">
                  <div>{item.title}</div>
                  <div>{item.value}</div>
                </div>
                <div className="myProgress">
                  <div className="myBar" style={{ width: item.value }}></div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}