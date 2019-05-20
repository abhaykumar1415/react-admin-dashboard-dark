import React, { Component } from 'react'
import './style.css';
export default class Dropdown extends Component {

  render() {
    return (
      <div className="dropdown-wrapper" style={{ backgroundColor: this.props.btn_color }} >
        < button className="action-button" style={{ backgroundColor: this.props.btn_color }}>{this.props.title}</button>
        <i class="material-icons font-size-20" onClick={this.props.handelClick}>
          arrow_drop_down
        </i>
      </div >
    )
  }
}
