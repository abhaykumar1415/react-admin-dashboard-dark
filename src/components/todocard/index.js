import React, { Component } from 'react'
import './style.css';

export default class TodoCard extends Component {
  render() {
    return (
      <div className="todo_card">
        <div className="time-day clr_darkgray">
          <div className="todo_date ">
            <i className="material-icons">
              watch_later
          </i>
            {this.props.todo_card.date}
          </div>
          <div>...</div>
        </div>
        <div className="todo_text color-white">{this.props.todo_card.text}</div>
        <div className="todo_images">{
          this.props.todo_card.images.map((image, index) => {
            return (
              <img src={image} alt='' className="todo_image" key={index} />
            )
          })
        }</div>
      </div>
    )
  }
}
