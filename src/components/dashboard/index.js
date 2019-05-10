import React, { Component } from 'react'
import './style.css';
// import Email from '../email';
// import Task from '../task';
// import Statistics from '../statistics';
// import Activity from '../activity';
import ButtonLayoutContainer from '../buttonlayoutcontainer';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },


    }
  }
  render() {
    return (
      <div className="main-content-wrapper" >
        <div className="main-content">
          <ButtonLayoutContainer />
          {/* <div className="content">
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
          </div> */}
        </div>
      </div>
    )
  }
}
