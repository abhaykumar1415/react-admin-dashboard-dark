import React, { Component } from 'react'
import './style.css';
import Button from '../button';
export default class ButtonWrapper extends Component {

  render() {
    let btnStyle;
    switch (this.props.title) {
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
      <div className="button-style-wrapper color-white">
        <div className="font-size-small font-weight margin-bottom">{this.props.title}</div>
        <div className="buttons-wrapper">
          {
            this.props.type === 'button_styles' ?
              this.props.data.map((item, index) => {
                let btnStyle, commonStyles, roundedBorders, filledBackground;
                commonStyles = {
                  color: item.color,
                  border: '1px solid ' + item.color,
                  fontSize: 'small',
                  padding: '11px 32px',
                  fontWeight: '500',
                  borderRadius: '3px',
                };
                roundedBorders = {
                  borderRadius: '25px'
                };
                filledBackground = {
                  backgroundColor: item.color,
                  color: 'white'
                }
                switch (this.props.title) {
                  case "Outline":
                    btnStyle = commonStyles;
                    break;
                  case "Filled": btnStyle = { ...commonStyles, ...filledBackground };
                    break;
                  case "Rounded-Outline": btnStyle = { ...commonStyles, ...roundedBorders };
                    break;
                  case "Rounded-Filled": btnStyle = { ...commonStyles, ...roundedBorders, ...filledBackground };
                    break;
                  default: break;
                }
                return (
                  <Button
                    key={index}
                    btnStyle={btnStyle}
                    title={item.title}
                  />
                )
              }) : null
          }
        </div>
        <div className="button_sizes_wrapper">
          {
            this.props.type === 'button_sizes' ?
              this.props.button_size_data.map((item, index) => {

                let btnStyle, commonStyles;
                commonStyles = {
                  backgroundColor: this.props.button_size_color.backgroundColor,
                  color: this.props.button_size_color.text_color,
                  fontSize: '12px',
                  border: '1px solid transparent'
                }
                console.log("clr", this.props.button_size_color.backgroundColor)
                switch (this.props.title) {
                  case 'XS': btnStyle = { ...commonStyles, padding: '7px 26px' }
                    break;
                  case 'small': btnStyle = { ...commonStyles, padding: '7px 30px' }
                    break;
                  case 'default': btnStyle = { ...commonStyles, padding: '9px 34px' }
                    break;
                  case 'large': btnStyle = { ...commonStyles, padding: '11px 42px' }
                    break;
                }
                return (
                  <Button
                    key={index}
                    title={item.title}
                    btnStyle={btnStyle}
                  />
                )
              })
              : null
          }
        </div>
      </div >
    )
  }
}
