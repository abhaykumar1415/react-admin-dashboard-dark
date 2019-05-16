import React, { Component } from 'react'
import './style.css';
export default class ButtonGroup extends Component {
  render() {
    return (
      <div className="button-group-wrapper">
        {
          this.props.title === 'gray_square_component' ?
            <div className="button_group_content">
              <button className="group-button" style={{ backgroundColor: this.props.left_bg_color, border: '1px solid' + this.props.left_bg_color }} >Left </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Medium </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Right </button>
            </div>
            : null
        }

        {
          this.props.title === 'blue_square_component' ?
            <div className="button_group_content">
              <button className="group-button" style={{ backgroundColor: this.props.left_bg_color, border: '1px solid' + this.props.left_bg_color }} >Left </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Medium </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Right </button>
            </div>
            : null
        }

        {
          this.props.title === "gray_rounded_component" ?
            <div className="button_group_content">
              <button className="group-button rounded-left-corner" style={{ backgroundColor: this.props.left_bg_color, border: '1px solid' + this.props.left_bg_color }}>Left </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Medium </button>
              <button className="group-button rounded-right-corner" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Right </button>
            </div>
            :
            null
        }

        {
          this.props.title === "blue_rounded_component" ?
            <div className="button_group_content">
              <button className="group-button rounded-left-corner" style={{ backgroundColor: this.props.left_bg_color, border: '1px solid' + this.props.left_bg_color }}>Left </button>
              <button className="group-button" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Medium </button>
              <button className="group-button rounded-right-corner" style={{ backgroundColor: this.props.med_right_color, border: '1px solid' + this.props.left_bg_color }}>Right </button>
            </div>
            :
            null
        }

      </div>
    )
  }
}
