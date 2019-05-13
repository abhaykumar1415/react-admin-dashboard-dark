import React, { Component } from 'react'
import './style.css';
import Button from '../button';
export default class ButtonWrapper extends Component {

  render() {
    //console.log("one comp. data :" + this.props.data + " title :" + this.props.title)
    return (
      <div className="button-style-wrapper color-white">
        <div className="font-size-small font-weight margin-bottom  ">{this.props.title}</div>
        <div className="buttons-wrapper">
          {
            this.props.type === 'button_styles' ?
              this.props.data.map((item, index) => {
                return (
                  <Button key={index}
                    title={item.title}
                    color={item.color}
                    buttontype={this.props.title}
                  />
                )
              }) : null
          }
        </div>
        <div className="button_sizes_wrapper">
          {
            this.props.type === 'button_sizes' ?
              this.props.button_size_data.map((item, index) => {
                return (
                  <Button
                    key={index}
                    title={item.title}
                    btn_color={this.props.button_size_color}
                    buttontype={item.title}
                  />
                )
              })
              : null
          }
        </div>
      </div>
    )
  }
}
