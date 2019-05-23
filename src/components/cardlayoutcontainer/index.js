import React, { Component } from 'react'
import './style.css';
import Card from '../cards';
import ProfileCard from '../profilecard';
import TodoCard from '../todocard';
import StatisticsCard from '../statisticscard';
import NoteCard from '../notescard';

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
        title: 'Statistics'
      }
    }
  }
  render() {
    return (
      <div>
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
              <div>{this.state.todo_card.option}</div>
            </div>
            <TodoCard todo_card={this.state.todo_card} />
            <TodoCard todo_card={this.state.todo_card} />
            <TodoCard todo_card={this.state.todo_card} />
          </div>
          <div className='notes-card-column'>
            <div className='card-header clr_white'>
              <div>{this.state.notes_card.title}</div>
              <div>{this.state.notes_card.option}</div>
            </div>
            <NoteCard notes_card={this.state.notes_card} />
            <NoteCard notes_card={this.state.notes_card} />
            <NoteCard notes_card={this.state.notes_card} />
          </div>
          <div>
            <div className='card-header clr_white'>
              <div>{this.state.stat_card.title}</div>
            </div>
            <StatisticsCard stat_card={this.state.stat_card} />
          </div>
        </div>
      </div >
    )
  }
}
