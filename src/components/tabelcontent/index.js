import React, { Component } from 'react'
import './style.css';
export default class TableContent extends Component {
  render() {
    return (
      <div className="tabel_content_wrapper">
        <div className="tabel_content_header">
          Name
          {/* <div>
            <i className="material-icons color-white ">
              arrow_drop_up
            </i>
            <i className="material-icons color-white">
              arrow_drop_down
            </i>
          </div> */}
        </div>
        <div className="tabel_content_header">Position</div>
        <div className="tabel_content_header">Location</div>
        <div className="tabel_content_header">Age</div>
        <div className="tabel_content_header">Gender</div>
      </div>
    )
  }
}
