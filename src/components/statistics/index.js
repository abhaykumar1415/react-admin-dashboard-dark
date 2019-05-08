import React, { Component } from 'react'
import './style.css';
export default class Statistics extends Component {
  render() {
    return (
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
    )
  }
}
