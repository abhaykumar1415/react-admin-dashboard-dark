import React, { Component } from 'react'
import './style.css';
import Chart from "chart.js";
import Visitor from '../visitors';
import LineGraph from '../linegraph';
import Email from '../email';
import Task from '../task';
import Statistics from '../statistics';
import Activity from '../activity';
// import Content from '../content';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chart_name: "Product Scale",
      task_title: 'Assigned Tasks',
      activity_title: 'Activity',
      first_content: {
        first_content_title: "Email",
        first_content_data:
          [
            {
              title: 'Open Rate',
              value: '75%'
            },
            {
              title: 'Sent',
              value: '200/1500'
            }
          ]
      },
      second_content: {
        second_content_title: "Statistics",
        second_content_data:
          [
            {
              title: 'Lorem Ipsum',
              value: '200',
              percentage: '75%',
              time: '12:09'
            },
            {
              title: 'Lorem Ipsum',
              value: '200',
              percentage: '75%',
              time: '12:09'
            }
          ]
      },
      third_content: {
        third_content_title: "Assigned Tasks",
        third_content_data:
          [
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: false
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: false
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: false
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: true
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: true
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: true
            },
            {
              title: 'Lorem,ipsum dolor sit amet',
              isCompleted: true
            }
          ]
      },
      fourth_content: {
        fourth_content_title: "Activity",
        fourth_content_data:
          [
            {
              title: 'Eric John',
              description: 'Assigned you a task Mockup Design.',
              time: '5 min ago'
            },
            {
              title: 'Terry Moore',
              description: 'Follow up to close deal.',
              time: '10 min ago'
            },
            {
              title: 'Eric John',
              description: 'Assigned you a task Mockup Design.',
              time: '1 hour ago'
            },
            {
              title: 'Eric John',
              description: 'Assigned you a task Mockup Design.',
              time: '2 hours ago'
            },

          ]
      }
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
      <div className="content main-content-wrapper ">
        <div className="dashboard-header"><span>Dashboard</span></div>
        <LineGraph chartRef={this.chartRef} chart_title={this.state.chart_name} />
        <div className="visitor-info">
          <Visitor color={this.props.clr_arr[0]} data={this.props.data} />
          <Visitor color={this.props.clr_arr[1]} data={this.props.data} />
          <Visitor color={this.props.clr_arr[2]} data={this.props.data} />
        </div>
        {/* <Content /> */}

        <div className="main-content">
          {/* <ButtonLayoutContainer /> */}
          <div className="content-four-tasks ">
            <div className="email-statistics">
              <Email
                email_content={this.state.first_content}
              />
              <Statistics
                stat_content={this.state.second_content}
              />
            </div>
            <div className="task-activity">
              <Task
                task_content={this.state.third_content}
              />
              <Activity
                activity_content={this.state.fourth_content}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
