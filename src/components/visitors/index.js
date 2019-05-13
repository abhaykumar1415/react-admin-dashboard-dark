import React, { Component } from 'react'

export default class Visitor extends Component {
  render() {
    return (
      <div className="visitors">
        <div className="visitor-content">
          <div className="visitor-icon" style={{ backgroundColor: this.props.color }}>
            <i class="material-icons eye-icon">
              remove_red_eye
            </i>
          </div>
          <div className="visitor-text">
            <div className="visit-no" style={{ color: this.props.color }}>{this.props.data.count}</div>
            <div className="font-white">{this.props.data.type}</div>
          </div>
        </div>
        <div className="visitor-info">
          <div className="visit-month font-white">{this.props.data.month_satus}</div>
          <div className="font-white">{this.props.data.percent}</div>
        </div>
      </div >
    )
  }
}
