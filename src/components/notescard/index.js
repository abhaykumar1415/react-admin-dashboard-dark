import React, { Component } from 'react'
import './style.css';

export default class NoteCard extends Component {
  render() {
    return (
      <div className='notes-card color-white'>
        <div className='notes-subtitle font-size-14 '>
          {this.props.notes_card.subtitle}
          <div className="cursor-pointer">...</div>
        </div>
        <div className='notes-description font-size-14 font-weight'>{this.props.notes_card.description}</div>
        <div className='notes-date font-size-14 font-weight'>
          {this.props.notes_card.date}
          <i className="material-icons create-icon">
            create
          </i>
        </div>
      </div>
    )
  }
}
