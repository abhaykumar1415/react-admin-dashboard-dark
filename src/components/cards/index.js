import React, { Component } from 'react'
import './style.css';
import Button from '../button';

export default class Cards extends Component {
  render() {
    return (
      <div>
        {
          this.props.user_profile ?
            <div className="user-profile">
              <div className="profile-img-div"><img src={this.props.user_profile.image} alt="" className="user-profile-img" /></div>
              <div className="user-name">{this.props.user_profile.title}</div>
              <div className="user-role clr_darkgray">{this.props.user_profile.role}</div>
              <div className="user-email">{this.props.user_profile.email}</div>
              {/* <div>
                <Button buttonType="Filled" color='#3E3F53' title='Message' padding='' />
                <Button buttonType="Outline" color='#3E3F53' title='View Profile' />
              </div> */}
            </div>
            : null
        }
        {
          this.props.todo_card ?

            <div className="todo_card">
              <div className="todo_date clr_darkgray">
                <i class="material-icons">
                  watch_later
                </i>
                {this.props.todo_card.date}
              </div>
              <div className="todo_text clr_white">{this.props.todo_card.text}</div>
              <div className="todo_images">{
                this.props.todo_card.images.map((image, index) => {
                  return (
                    <img src={image} alt='' className="todo_image" />
                  )
                })
              }</div>
            </div>
            : null
        }
        {
          this.props.notes ?
            <div className='notes'>

            </div>
            : null
        }
      </div>
    )
  }
}
