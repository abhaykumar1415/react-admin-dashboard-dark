import React, { Component } from 'react'
import './style.css';
import Chart from "chart.js";
import Visitor from '../visitors';
import LineGraph from '../linegraph';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chart_name: "Product Scale"
    }
  }

  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
            data: [0, 6, 6, 40, 20, 30, 10, 10, 30, 15, 5, 30, 35],
            backgroundColor: "rgb(89, 94, 99)"
          },
          {
            label: "National Average",
            data: [0, 30, 70, 40, 60, 35, 86, 40, 35, 25, 10, 15],
            borderColor: "rgb(157, 159, 160)"
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        drawTime: "afterDraw",
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: "March",
              borderColor: "white",
              borderWidth: 2,
              label: {
                content: "TODAY",
                enabled: true,
                position: "left"
              }
            }
          ]
        }
      }
    });
  }
  render() {
    return (
      <div className="content">
        <div className="dashboard-header"><span>Dashboard</span></div>
        <LineGraph chartRef={this.chartRef} chart_title={this.state.chart_name} />
        <div className="visitor-info">
          <Visitor color={this.props.clr_arr[0]} data={this.props.data} />
          <Visitor color={this.props.clr_arr[1]} data={this.props.data} />
          <Visitor color={this.props.clr_arr[2]} data={this.props.data} />
        </div>
      </div>
    )
  }
}
