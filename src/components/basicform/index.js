import React, { Component } from 'react';
import './style.css';

export default class BasicForm extends Component {

  getInput = () => {

  }

  render() {
    return (
      <div className="basic-form-wrapper">
        <div className="form-header"><h1>Basic Form</h1></div>
        <div className="form-content">
          <div className="names">
            <div className="text-fileds">
              {/* <span className="input-placeholder">{this.props.basic_form_data.firstname}</span><br /> */}
              <input type="text" placeholder={this.props.basic_form_data.firstname} className="text-input" onChange={this.getInput} />
            </div>
            <div className="text-fileds">
              {/* <span className="input-placeholder">{this.props.basic_form_data.lastname}</span><br /> */}
              <input type="text" placeholder={this.props.basic_form_data.lastname} className="text-input" />
            </div>
          </div>
          <div className="text-fileds">
            {/* <span className="input-placeholder">{this.props.basic_form_data.useremail}</span><br /> */}
            <input type="text" placeholder={this.props.basic_form_data.useremail} className="text-input" />
          </div>
          <div className="text-fileds">
            {/* <span className="input-placeholder">{this.props.basic_form_data.password}</span><br /> */}
            <input type="text" placeholder={this.props.basic_form_data.password} className="text-input" />
          </div>
          <div className="contact-verify">
            <span className="input-placeholder">{this.props.basic_form_data.verification.title}</span><br />
            <div className="checkbox-grp">
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.basic_form_data.verification.email}</h5></div>
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.basic_form_data.verification.sms}</h5></div>
              <div className="verify-data"><input type="checkbox" /><h5>{this.props.basic_form_data.verification.phone}</h5></div>
            </div>
          </div>
          <div className="form-buttons">
            <button className="form-btn cancel-btn-clr">CANCEL</button>
            <button className="form-btn login-btn-clr">LOG IN</button>
          </div>
        </div >
      </div >
    )
  }
}
