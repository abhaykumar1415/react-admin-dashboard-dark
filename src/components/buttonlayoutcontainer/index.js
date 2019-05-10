import React, { Component } from 'react'
import './style.css';
import ButtonWrapper from '../buttonwrapper';
export default class ButtonLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outline_content_title: [
        {
          title: "Outline",
        },
        {
          title: "Filled",
        },
        {
          title: "Rounded-Outline",
        },
        {
          title: "Rounded-Filled",
        },
      ]

    }
  }
  render() {
    return (
      <div>
        <div className="button-layout-container">
          <div className="button-header color-white">
            Buttons
          </div>
          <div className="font-size-small color-white">
            Home > Components > Buttons
          </div>
        </div>
        <div className="color-white button-style font-size-small font-weight margin-bottom">Button Colors & Styles</div>
        {
          this.state.outline_content_title.map((item, index) => {
            return (
              <ButtonWrapper
                key={index}
                title={item.title}
              />
            )
          })
        }
      </div>
    )
  }
}
