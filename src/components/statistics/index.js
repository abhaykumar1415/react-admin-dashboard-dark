import React, { Component } from 'react'
import './style.css';
export default class Statistics extends Component {
  render() {
    return (
      <div className="statistics-wrapper">
        <div className="statistics-header color">{this.props.stat_content.second_content_title}</div>
        {
          this.props.stat_content.second_content_data.map((item, index) => {
            return (
              <div key={index}>
                <div className="rate color">
                  <div>{item.title}</div>
                  <div>{item.value}</div>
                </div>
                <div className="rate-time color">
                  <div className="percentage">{item.percentage}</div>
                  <div>{item.time}</div>
                </div>
                <div className="myProgress">
                  <div className="myBar" style={{ width: item.percentage }}></div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
