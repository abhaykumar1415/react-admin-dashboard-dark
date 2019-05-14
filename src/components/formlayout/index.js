import React, { Component } from 'react'
import BasicForm from '../basicform';
import IconicForm from '../iconicform';
import HorizontalForm from '../horizontalform';
import './style.css';

export default class FormLayout extends Component {
  constructor() {
    super();
    this.state = {
      basic_form_data: {
        firstname: 'First name',
        lastname: 'Last Name',
        useremail: 'Email Address',
        password: 'Password',
        verification: {
          title: 'Verify',
          email: 'Email',
          sms: 'SMS',
          phone: 'Phone'
        }
      },
      iconic_form_data: {
        username: 'Username',
        useremail: 'Email Address',
        password: 'Password',
        verification: {
          title: 'Verify',
          email: 'Email',
          sms: 'SMS',
          phone: 'Phone'
        }
      }
    }
  }
  render() {
    return (
      <div>
        <div className="forms">
          <BasicForm
            basic_form_data={this.state.basic_form_data}
          />
          <IconicForm
            iconic_form_data={this.state.iconic_form_data}
          />
        </div>
        <HorizontalForm
          iconic_form_data={this.state.iconic_form_data}
        />
      </div>
    )
  }
}
