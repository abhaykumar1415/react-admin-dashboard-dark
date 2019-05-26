import React, { Component } from 'react'
import './style.css';
import Card from '../cards';
import ProfileCard from '../profilecard';
import TodoCard from '../todocard';
import StatisticsCard from '../statisticscard';
import NoteCard from '../notescard';
import Chart from 'chart.js';

export default class CardLayoutContainer extends Component {
  constructor() {
    super();
    this.state = {
      user_profile_card: [
        {
          image: require('../../images/profile.png'),
          title: 'Vrushali Bhosale',
          role: 'Front End Developer',
          email: 'vrushali.bhosale@qed42.com'
        },
        {
          image: require('../../images/profile.png'),
          title: 'Vrushali Bhosale',
          role: 'Front End Developer',
          email: 'vrushali.bhosale@qed42.com'
        },
        {
          image: require('../../images/profile.png'),
          title: 'Vrushali Bhosale',
          role: 'Front End Developer',
          email: 'vrushali.bhosale@qed42.com'
        }
      ],
      todo_card: {
        title: 'ToDo',
        option: 'Add Task',
        date: 'August 24,2018',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed diam',
        images: [
          require('../../images/profile.png'), require('../../images/profile.png'), require('../../images/profile.png')
        ]
      },
      notes_card: {
        title: 'Notes',
        option: 'Add New',
        subtitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed diam',
        date: 'August 24,2018'
      },
      stat_card: {
        title: 'Statistics',
        subtitle: 'Lorem ipsum dolor',
        data: {
          labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", 'red', 'green'],
              data: [2478, 5267, 7000, 6000, 4000, 8000, 5000]
            }
          ]
        },
        option: {
          scaleShowLables: false,
        }
      }
    }
  }
  chartRef = React.createRef();
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    new Chart(myChartRef, {
      type: 'bar',
      data: this.state.stat_card.data,
      option: this.state.stat_card.option
    });
  }
  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="user-profiles">
          {
            this.state.user_profile_card.map((item, index) => {
              return (
                <ProfileCard user_profile={item} key={index} />
              )
            })
          }
        </div>

        <div className="card_columns">
          <div className="todos">
            <div className="card-header clr_white">
              <div>{this.state.todo_card.title}</div>
              <div className="add-task">
                <i className="material-icons">
                  add_circle_outline
                </i>
                {this.state.todo_card.option}</div>
            </div>
            <TodoCard todo_card={this.state.todo_card} />
            <TodoCard todo_card={this.state.todo_card} />
            <TodoCard todo_card={this.state.todo_card} />
          </div>
          <div className='notes-card-column'>
            <div className='card-header clr_white'>
              <div>{this.state.notes_card.title}</div>
              <div className="add-task">
                <i className="material-icons">
                  add_circle_outline
                </i>
                {this.state.notes_card.option}</div>
            </div>
            <NoteCard notes_card={this.state.notes_card} />
            <NoteCard notes_card={this.state.notes_card} />
            <NoteCard notes_card={this.state.notes_card} />
          </div>
          <div className="statistics-card-wrapper">
            <div className='card-header clr_white'>
              <div>{this.state.stat_card.title}</div>
              <div className="cursor-pointer">...</div>
            </div>
            <StatisticsCard chartRef={this.chartRef} stat_card={this.state.stat_card} />
          </div>
        </div>
      </div >
    )
  }
}
