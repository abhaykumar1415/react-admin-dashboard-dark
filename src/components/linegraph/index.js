import React, { Component } from 'react'

export default class LineGraph extends Component {
  render() {
    return (
      <div className="product-scale">
        <div className="product-scale-header">
          <div className="product-scale-heading">{this.props.chart_title}</div>
          <input list="year" className="product-scale-yr-list" />
          <datalist id="year">
            <option value="2018" />
            <option value="2019" />
            <option value="2020" />
          </datalist>
        </div>
        <canvas
          id="myChart"
          ref={this.props.chartRef}
          className="chart"
          border-radius="10px"
        />
      </div >
    )
  }
}
