import React, { Component } from 'react'

export default class TodoTask extends Component {
  render() {
    return (
      <div>
        <div>
          <div>August 24,2018</div>
          <div>...</div>
        </div>
        <div>Lorum  ipsum dolor sit amet,consecteture  adipiscing elit, sed diam</div>
        <div>
          <img src={require('../../images/profile.png')} alt='profile' />
          <img src={require('../../images/profile.png')} alt='profile' />
          <img src={require('../../images/profile.png')} alt='profile' />
        </div>
      </div>
    )
  }
}
