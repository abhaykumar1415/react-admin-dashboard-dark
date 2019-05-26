import React, { Component } from 'react'
import './style.css';
import Button from '../button';
export default class ButtonWrapper extends Component {

  render() {
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

                let btnSizes, commonStyles;
                commonStyles = {
                  backgroundColor: this.props.button_size_color.backgroundColor,
                  color: this.props.button_size_color.text_color,
                  fontSize: '12px',
                  border: '1px solid transparent',
                  borderRadius: '3px'
                };

                switch (item.title) {
                  case 'XS': btnSizes = { ...commonStyles, padding: '7px 26px', marginRight: '197px' };
                    break;
                  case 'small': btnSizes = { ...commonStyles, padding: '7px 30px', marginRight: '139px' };
                    break;
                  case 'default': btnSizes = { ...commonStyles, padding: '9px 34px', marginRight: '124px' };
                    break;
                  case 'large': btnSizes = { ...commonStyles, padding: '11px 42px' };
                    break;
                }
                console.log("clr", btnSizes);
                return (
                  <Button
                    key={index}
                    title={item.title}
                    btnStyle={btnSizes}
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
