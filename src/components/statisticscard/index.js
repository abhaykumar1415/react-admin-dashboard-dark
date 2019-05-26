import React, { Component } from 'react'
import './style.css';

export default class StatisticsCard extends Component {

  render() {
    console.log("clr");
    return (
      <div className="chart-wrapper" >
        <canvas
          ref={this.props.chartRef}
          className='bar-graph'
        />
        <div className="statisstics-list-wrapper">
          <div className="color-white statistics-data">
            {this.props.stat_card.data.datasets[0].data.map((item, index) => {
              return (
                <div key={index} className="statistics-list">
                  <div className="blank" style={{ backgroundColor: this.props.stat_card.data.datasets[0].backgroundColor[index] }} ></div>
                  <div className="subtitle font-size-12"> {this.props.stat_card.subtitle}</div>
                  <div className="percentage font-size-12">{(item / 8000) * 100}%</div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}
