import React, { Component } from 'react'
import './style.css';

export default class StatisticsCard extends Component {
  render() {
    return (
      <div>
        <canvas
          ref={this.props.chartRef}
          className='bar-graph'
        />
        <div>

        </div>
      </div>
    )
  }
}
