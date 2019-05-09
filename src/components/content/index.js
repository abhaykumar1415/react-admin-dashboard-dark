import React, { Component } from 'react';
import Dashboard from '../dashboard';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Dashboard
          clr_arr={this.props.clr_arr}
          data={this.props.data}
        />
      </div>
    )
  }
}
