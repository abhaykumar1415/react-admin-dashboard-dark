import React, { Component } from 'react'
import './style.css';
export default class Email extends Component {
  render() {
    return (
      <div className="email-statistics-content">
        <div className="email-wrapper">
          <div className="email-header color">Emails</div>
          <div>
            <div className="rate color">
              <div>Open Rate</div>
              <div>75%</div>
            </div>
            <div className="myProgress">
              <div className="myBar"></div>
            </div>
          </div>
          <div>
            <div className="rate color">
              <div>Sent</div>
              <div>200/1500</div>
            </div>
            <div className="myProgress">
              <div className="myBar"></div>
            </div>
          </div>
        </div>

        <div className="statistics-wrapper">
          <div className="email-header color">Statistics</div>
          <div>
            <div className="rate color">
              <div>Lorem Ipsum</div>
              <div>200</div>
            </div>
            <div className="rate-time color">
              <div className="percentage">75%</div>
              <div>12:09</div>
            </div>
            <div className="myProgress">
              <div className="myBar"></div>
            </div>
          </div>
          <div>
            <div className="rate color">
              <div>Lorem Ipsum</div>
              <div>200</div>
            </div>
            <div className="rate-time color">
              <div className="percentage">75%</div>
              <div>12:09</div>
            </div>
            <div className="myProgress">
              <div className="myBar"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
