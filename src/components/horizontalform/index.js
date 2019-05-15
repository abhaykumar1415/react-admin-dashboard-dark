import React, { Component } from 'react';
import './style.css';

export default class HorizontalForm extends Component {
  render() {
    return (
      <div className="horizontal-form-wrapper">
        <div className="form-header"><h1>{this.props.horizontal_form_data.title}</h1></div>
        <div className="form-content">
          <div className="text-fileds">
            <input type="text" placeholder={this.props.horizontal_form_data.username} className="text-input" onChange={this.getInput} />
          </div>
          <div className="text-fileds iconic-text-fields">
            <input type="text" placeholder={this.props.horizontal_form_data.useremail} className="text-input" />
          </div>
          <div className="text-fileds iconic-text-fields">
            <input type="text" placeholder={this.props.horizontal_form_data.password} className="text-input" />
          </div>
          <div className="verification">
            <div className="verify-data"><input type="checkbox" /><div>{this.props.horizontal_form_data.verification}</div></div>
            <div className="forgot-password">Forgot Password?</div>
          </div>
          <div className="form-buttons">
            <button className="form-btn cancel-btn-clr">CANCEL</button>
            <button className="form-btn login-btn-clr">LOG IN</button>
          </div>
        </div >
      </div>
    )
  }
}
