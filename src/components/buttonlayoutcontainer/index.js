import React, { Component } from 'react'
import './style.css';
import ButtonWrapper from '../buttonwrapper';
import Dropdown from '../dropdown';
import ButtonGroup from '../button-group';
import MultipleButton from '../multiple_button';
import VerticalGroup from '../verticalgroup';
import SocialButtons from '../socialbuttons';
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
      ],
      action_button_color: [
        {
          btn_color: '#005FEA'
        },
        {
          btn_color: '#FEFEFE'
        },
        {
          btn_color: '#F7B032'
        },
        {
          btn_color: '#65D463'
        },
        {
          btn_color: '#ED4741'
        },
        {
          btn_color: '#1D262E'
        },
        {
          btn_color: '#D8D8D8'
        },
      ],
      dropodown_btn_title: 'Action',
      button_group_data: [
        {
          title: 'gray_square_component',
          left_bg_color: '#D8D8D8',
          med_right_color: '#FEFEFE',
          text_color: '#232428'
        },
        {
          title: 'blue_square_component',
          left_bg_color: '#0760C4',
          med_right_color: '#005FEA',
          text_color: '#94D4FC'
        },
        {
          title: 'gray_rounded_component',
          left_bg_color: '#D8D8D8',
          med_right_color: '#FEFEFE',
          text_color: '#232428'
        },
        {
          title: 'blue_rounded_component',
          left_bg_color: '#0760C4',
          med_right_color: '#005FEA',
          text_color: '#94D4FC'
        }
      ],
      multiple_buttons: [
        {
          bg_color: '#FEFEFE',
          dark_bg_color: '#D8D8D8'
        },
        {
          bg_color: '#005FEA',
          dark_bg_color: '#0760C4'
        }
      ],
      social_buttons: [
        {
          title: 'Social Buttons'
        },
        {
          title: 'Icons'
        }
      ]
    }
  }
  render() {
    return (
      <div className="button-layout-container-wrapper">
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
        <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Dropdowns</div>
          <div className="dropdown-btn-content">
            {
              this.state.action_button_color.map((item, index) => {
                return (
                  <Dropdown
                    key={index}
                    title={this.state.dropodown_btn_title}
                    btn_color={item.btn_color}
                  />
                )
              })
            }
          </div>
        </div>
        <div>
          <div className="color-white button-style font-size-small font-weight margin-bottom">Button Groups</div>
          <div className="square_rounded_button_group_wrapper">
            <div className="color-white padding font-size-small font-weight">Button Group</div>
            <div className="square_rounded_button_content">
              {
                this.state.button_group_data.map((item, index) => {
                  return (
                    <ButtonGroup
                      title={item.title}
                      left_bg_color={item.left_bg_color}
                      med_right_color={item.med_right_color}
                      text_color={item.text_color}
                      button_group={this.state.button_group}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className=" background_black">
          <div className="color-white padding font-size-small font-weight">Multiple</div>
          <div className="multiple_buttons">
            {
              this.state.multiple_buttons.map((item, index) => {
                return (
                  <MultipleButton
                    bg_color={item.bg_color}
                    dark_bg_color={item.dark_bg_color}
                  />
                )
              })
            }
          </div>
        </div>
        <div className=" background_black" >
          <div className="color-white padding font-size-small font-weight">Vertical Group</div>
          <div className="vertical_group">
            {
              this.state.multiple_buttons.map((item, index) => {
                return (
                  <VerticalGroup
                    bg_color={item.bg_color}
                    dark_bg_color={item.dark_bg_color}
                  />
                )
              })
            }
          </div>
        </div>
        <div>
          <div className="social_buttons">
            {
              this.state.social_buttons.map((item, index) => {
                return (
                  <SocialButtons
                    title={item.title}
                  />
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}
