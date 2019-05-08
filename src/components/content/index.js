import React, { Component } from 'react'
import './style.css';
import Email from '../email';
import TaskActivity from '../taskactivity';
import Statistics from '../statistics';
export default class Content extends Component {
  render() {
    return (
      <div className="main-content-wrapper" >
        <div className="content">
          <div className="content-header">
            Dashboard
        </div>
          {/* <div className="email-statistics"> */}
            <Email />
            {/* <Statistics /> */}
          {/* </div>
          <div> */}
            <TaskActivity />
          {/* </div> */}
        </div>
      </div>
    )
  }
}
