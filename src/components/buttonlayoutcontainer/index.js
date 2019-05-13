import React, { Component } from 'react'
import './style.css';
import ButtonWrapper from '../buttonwrapper';
// import ButtonSize from '../button-sizes';
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
      ],
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
        ],
      button_sizes: [
        {
          title: "XS"
        },
        {
          title: "small"
        },
        {
          title: "default"
        },
        {
          title: "large"
        }
      ],
      button_size_colors: [
        {
          backgroundColor: "#005FEA",
          text_color: '#DAFDFE'
        },
        {
          backgroundColor: "FFFFFF",
          text_color: '#17171D'
        },
        {
          backgroundColor: "#D8D8D8",
          text_color: '#616162'
        }
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
                type="button_styles"
                title={item.title}
                data={this.state.outline_content_data}
              />
            )
          })
        }

        <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Sizes</div>
          <div className="color-white button_with_sizes">
            <div className="button-size-header font-size-small font-weight margin-right ">Extra Small</div>
            <div className="button-size-header font-size-small font-weight margin-right">Small</div>
            <div className="button-size-header font-size-small font-weight margin-right">Default</div>
            <div className="button-size-header font-size-small font-weight margin-right">Large</div>
          </div>
          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[0]}
            type="button_sizes"
          />

          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[1]}
            type="button_sizes"
          />

          <ButtonWrapper
            button_size_data={this.state.button_sizes}
            button_size_color={this.state.button_size_colors[2]}
            type="button_sizes"
          />
        </div>
        {/* <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Dropdowns</div>

        </div> */}

      </div>
    )
  }
}
