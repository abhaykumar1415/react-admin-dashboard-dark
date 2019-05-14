import React, { Component } from 'react'

export default class HorizontalForm extends Component {
  render() {
    return (
      <div className="basic_form-wrapper">
        <div className="form-header"><h1>Iconic Form</h1></div>
        <div className="form-content">
          <div className="text-fileds iconic-text-fields">
            <input type="text" placeholder={this.props.iconic_form_data.username} className="text-input" onChange={this.getInput} />
            <i class="material-icons username-icon-clr">
              person_outline
          </i>
          </div>
          <div className="text-fileds iconic-text-fields">
            <input type="text" placeholder={this.props.iconic_form_data.useremail} className="text-input" />
            <i class="material-icons username-icon-clr">
              email
          </i>
          </div>
          <div className="text-fileds iconic-text-fields">
            <input type="text" placeholder={this.props.iconic_form_data.password} className="text-input" />
            <i class="material-icons username-icon-clr">
              https
          </i>
          </div>
          <div className="contact-verify">
            <span className="input-placeholder">{this.props.iconic_form_data.verification.title}</span><br />
            <div className="checkbox-grp">
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.iconic_form_data.verification.email}</h5></div>
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.iconic_form_data.verification.sms}</h5></div>
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.iconic_form_data.verification.phone}</h5></div>
            </div>
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
