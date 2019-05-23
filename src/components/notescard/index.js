import React, { Component } from 'react'
import './style.css';

export default class NoteCard extends Component {
  render() {
    return (
      <div className='notes-card'>
        <div className=''><h3>{this.props.notes_card.subtitle}</h3></div>
        <div className=''>{this.props.notes_card.description}</div>
        <div className=''>{this.props.notes_card.date}</div>
      </div>
    )
  }
}
