import React, { Component } from 'react'
import BasicForm from '../basicform';
import IconicForm from '../iconicform';
import HorizontalForm from '../horizontalform';
import TwoColumnForm from '../twocolumnform';
import './style.css';

export default class FormLayout extends Component {
  constructor() {
    super();
    this.state = {
      basic_form_data: {
        title: 'Basic Form',
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
        title: 'Iconic Form',
        username: 'Username',
        useremail: 'Email Address',
        password: 'Password',
        verification: {
          title: 'Verify',
          email: 'Email',
          sms: 'SMS',
          phone: 'Phone'
        }
      },
      horizontal_form_data: {
        title: 'Horizontal Form',
        username: 'Username',
        useremail: 'Email Address',
        password: 'Password',
        verification: 'Remember me'
      },
      two_column_form_data: {
        title: 'Two Column Form',
        firstname: 'First name',
        lastname: 'Last Name',
        useremail: 'Email Address',
        phoneno: 'Phone Number',
        password: 'Password',
        cpassword: 'Confirm Password',
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
      <div className="forms">
        <div className="header color-white layout-container">
          Data Table
          </div>
        <div className="basic-iconic-forms">
          <BasicForm
            basic_form_data={this.state.basic_form_data}
          />
          <IconicForm
            iconic_form_data={this.state.iconic_form_data}
          />
        </div>
        <HorizontalForm
          horizontal_form_data={this.state.horizontal_form_data}
        />
        <TwoColumnForm
          two_column_form_data={this.state.two_column_form_data}
        />
      </div>
    )
  }
}
