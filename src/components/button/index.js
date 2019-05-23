import React, { Component } from 'react'
import './style.css';
export default class Button extends Component {
  render() {
    let btnStyle;
    // console.log("props", this.props.btn_colors ? this.props.btn_colors : null);
    switch (this.props.buttonType) {
      case "Outline":
        btnStyle = {
          border: "1px solid" + this.props.color,
          color: this.props.color,
          fontSize: 'small',
          padding: this.props.padding ? this.props.padding : '11px 32px',
          fontWeight: '500'
        };
        break;
      case "Filled": btnStyle = {
        backgroundColor: this.props.color,
        color: 'white',
        fontSize: 'small',
        padding: '11px 32px',
        fontWeight: '500',
        border: '1px solid transperant'
      };
        break;
      case "Rounded-Outline": btnStyle = {
        border: "1px solid" + this.props.color,
        color: this.props.color,
        borderRadius: '25px',
        fontSize: 'small',
        padding: '11px 32px',
        fontWeight: '500'
      };
        break;
      case "Rounded-Filled": btnStyle = {
        backgroundColor: this.props.color,
        color: 'white',
        borderRadius: '25px',
        fontSize: 'small',
        padding: '11px 32px',
        fontWeight: '500'
      };
        break;
      case "XS": btnStyle = {
        backgroundColor: this.props.btn_bg_color.backgroundColor,
        color: this.props.btn_bg_color.text_color,
        fontSize: '12px',
        border: '1px solid transparent',
        padding: '7px 26px',
        fontWeight: '200',
        borderRadius: '3px',
        marginRight: '197px'
      };
        break;
      case "small": btnStyle = {
        backgroundColor: this.props.btn_bg_color.backgroundColor,
        color: this.props.btn_bg_color.text_color,
        fontSize: '12px',
        border: '1px solid transparent',
        padding: '7px 30px',
        fontWeight: '300',
        borderRadius: '3px',
        marginRight: '139px'
      };
        break;
      case "default": btnStyle = {
        backgroundColor: this.props.btn_bg_color.backgroundColor,
        color: this.props.btn_bg_color.text_color,
        fontSize: '12px',
        border: '1px solid transparent',
        padding: '9px 34px',
        fontWeight: '400',
        borderRadius: '3px',
        marginRight: '124px'
      };
        break;
      case "large": btnStyle = {
        backgroundColor: this.props.btn_bg_color.backgroundColor,
        color: this.props.btn_bg_color.text_color,
        fontSize: '18px',
        border: '1px solid transparent',
        padding: '11px 42px',
        fontWeight: '600',
        borderRadius: '3px'
      };
        break;
      default: ;
    }

    return (
      <div className="button-content-wrapper">
        <button style={btnStyle}>{this.props.title}</button>
      </div >
    )
  }
}


// this.props.btn_colors[0]