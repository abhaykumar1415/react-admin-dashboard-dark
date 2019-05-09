import React, { Component } from 'react'
import './style.css';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isClicked: false
    }
  }

  // handelClick = () => {
  //   console.log("dfghjk");
  //   this.setState({ isClicked: !this.state.isClicked });
  // }

  render() {
    return (
      <div className="main-wrapper">
        <div className="header-wrapper">
          <div className="search-icon ">
            <div className="color-gray margin" >
              <i className="material-icons">
                search
              </i>
            </div>
            <div >
              <input className="color-gray"
                type="search"
                placeholder="Search" />
            </div>
          </div>
          <div className="menu-content-wrapper">
            <i className="material-icons size-30">
              mail_outline
            </i>
            <i className="material-icons size-30">
              notifications_none
            </i>
            <div className="profile-wrapper">
              <img src={require('../../images/profile.png')} alt="profile" className="profile-img-header" />
              <div className="font-size">
                <h4> Leonid Aristov</h4>
              </div>
              <div className="logout">
                <i className="material-icons size-30 margin " onClick={this.props.handelClick} >
                  arrow_drop_down
                </i>
              </div>
            </div>
            <div>
              <i className="material-icons size-30">
                menu
              </i>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
