import React, { Component } from 'react'
import './style.css';

export default class TodoCard extends Component {
  render() {
    return (
      <div className="todo_card">
        <div className="todo_date clr_darkgray">
          <i class="material-icons">
            watch_later
                </i>
          {this.props.todo_card.date}
        </div>
        <div className="todo_text">{this.props.todo_card.text}</div>
        <div className="todo_images">{
          this.props.todo_card.images.map((image, index) => {
            return (
              <img src={image} alt='' className="todo_image" />
            )
          })
        }</div>
      </div>
    )
  }
}
