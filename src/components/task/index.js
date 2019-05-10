import React, { Component } from 'react'
import './style.css';
export default class Task extends Component {
  render() {
    return (
      <div className="task-wrapper">
        <div className="task-activity-header"> {this.props.task_content.third_content_title}</div>
        <div className="list-content">
          {
            this.props.task_content.third_content_data.map((item, index) => {
              return (
                <div className="list-wrapper" key={index}>
                  <div className="selection-wrapper">
                    <input type="checkbox" className="checkbox" />
                    <div>{item.title}</div>
                  </div>
                  <button className={item.isCompleted === true ? 'status_completed' : 'status_pending'}>
                    {
                      item.isCompleted === true ? 'completed' : 'pending'
                    }
                  </button>
                </div>
              )
            })
          }
        </div>
        <div className="view-all-button">
          VIEW All
        </div>
      </div>
    )
  }
}
