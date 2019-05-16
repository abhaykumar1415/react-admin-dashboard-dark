import React, { Component } from 'react'
import './style.css';
export default class VerticalGroup extends Component {
  render() {
    return (
      <div className="vertical_group_wrapper">
        <button className="vertical_grp_style" style={{ backgroundColor: this.props.dark_bg_color, border: '1px solid' + this.props.dark_bg_color }}>Option 1</button>
        <button className="vertical_grp_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>Option 2</button>
        <button className="vertical_grp_style" style={{ backgroundColor: this.props.bg_color, border: '1px solid' + this.props.dark_bg_color }}>Option 3</button>
      </div>
    )
  }
}
