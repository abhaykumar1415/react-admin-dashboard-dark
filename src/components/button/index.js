import React, { Component } from 'react'
import './style.css';
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttontype: ''
    }
  }
  render() {
    var btnStyle;
    console.log("props", this.props.buttontype);
    switch (this.props.buttontype) {
      case "Outline": btnStyle = {
        border: "2px solid" + this.props.color,
        color: this.props.color,
        fontSize: 'small',
        padding: '11px 32px',
        fontWeight: '500'
      };
        break;
      case "Filled": btnStyle = {
        backgroundColor: this.props.color,
        color: 'white',
        fontSize: 'small',
        padding: '11px 32px',
        fontWeight: '500'
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
      }
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
