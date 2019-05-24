import React, { Component } from 'react'
import './style.css';
export default class Button extends Component {
  render() {
    return (
      <div className="button-content-wrapper">
        <button style={this.props.btnStyle}>{this.props.title}</button>
      </div >
    )
  }
}


// this.props.btn_colors[0]