import React, { Component } from 'react'
import './style.css';
export default class MultipleButton extends Component {
  render() {
    return (
      <div className="multiple_button_wrapper">
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>1</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.dark_bg_color, border: '1 px solid' + this.props.dark_bg_color }}>2</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>3</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>4</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>5</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>6</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>7</button>
        <button className="multiple_button_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>8</button>
      </div>
    )
  }
}
