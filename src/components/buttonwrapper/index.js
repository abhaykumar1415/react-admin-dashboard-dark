import React, { Component } from 'react'
import './style.css';
import Button from '../button';
export default class ButtonWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttontype: "",
      outline_content_data:
        [
          {
            title: 'Primary',
            color: '#6387C5'
          },
          {
            title: 'white',
            color: '#D8D8D8'
          },
          {
            title: 'Accent',
            color: '#D6BD84'
          },
          {
            title: 'Success',
            color: '#65AC80'
          },
          {
            title: 'Danger',
            color: '#ED4740'
          },
          {
            title: 'Dark',
            color: '#1D242F'
          },
          {
            title: 'Disabled',
            color: '#D8D8D8'
          },
        ]
    }
  }




  render() {
    return (
      <div className="button-style-wrapper color-white">
        <div className="font-size-small font-weight margin-bottom color-black ">{this.props.title}</div>
        <div className="buttons-wrapper">
          {
            this.state.outline_content_data.map((item, index) => {
              return (
                <Button key={index}
                  title={item.title}
                  color={item.color}
                  buttontype={this.props.title}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
