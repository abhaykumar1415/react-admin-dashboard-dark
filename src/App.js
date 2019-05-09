import React, { Component } from 'react';
import NavigationDrawer from './components/navigationDrawer';
import Header from './components/header';
import Content from './components/dashboard';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Form from './components/forms';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      active_menu_item: 'dashboard',
      clr_arr: [],
      visitor_data: {
        count: "2230",
        type: "Unique Visitors",
        month_satus: "LAST MONTH VISITORS",
        percent: "35%"
      },
      userProfile: {
        name: "Leonid Aristov",
        role: "Project Manager"
      }
    }
  }

  updateActiveMenu = (active_menu_item) => {
    this.setState({ active_menu_item });
  }

  componentDidMount = () => {
    let clr_arr = ["#db1c58", "#56f442", "#e8d90d"];
    console.log("data arr", clr_arr);
    this.setState({ clr_arr: clr_arr });
  }

  render() {
    console.log("active-menu :", this.state.active_menu_item);
    return (
      <div>
        <Header />
        <div className="content-wrapper">
          <NavigationDrawer
            userdata={this.state.userProfile}
            active_menu_item={this.state.active_menu_item}
            updateActiveMenu={this.updateActiveMenu}
          />

          <Router>
            <div>
              {/* <Route path="/"
                component={() => <Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />}
              /> */}

              {this.state.active_menu_item === "dashboard" &&
                <Route exact path="/dashboard" component={() => <Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />} />
              }

              {/* {
                this.state.active_menu_item === "dashboard" ?

                  <Route path="/dashboard" component={() => <Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />} />
                  : null
              }

              {
                this.state.active_menu_item === "forms" ?

                  <Route path="/forms" component={Form} />
                  : null
              } */}

            </div>
          </Router>
        </div>
      </div>
    )
  }
}
