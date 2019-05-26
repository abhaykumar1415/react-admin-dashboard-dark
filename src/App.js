import React, { Component } from 'react';
import NavigationDrawer from './components/navigationDrawer';
import Header from './components/header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard';
import Form from './components/forms';
import Apps from './components/apps';
import Calender from './components/calender';
import ButtonLayoutContainer from './components/buttonlayoutcontainer';
import Listing from './components/listing';
import Icons from './components/icons';
import FormLayout from './components/formlayout';
import Table from './components/table';
import CardLayoutContainer from './components/cardlayoutcontainer';

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
      },
      form_submenu: [
        {
          title: 'Form Layout'
        },
        {
          title: 'Form Inputs'
        },
        {
          title: 'Form Controls'
        }
      ],
      pages_submenu: [
        {
          title: 'Listing'
        }
      ],
      components_submenu: [
        {
          title: 'Buttons'
        },
        {
          title: 'Cards'
        }
      ],

    }
  }


  updateActiveMenu = (active_menu_item) => {
    this.setState({ active_menu_item });
  }

  componentDidMount = () => {
    let clr_arr = ["#db1c58", "#56f442", "#e8d90d"];
    this.setState({ clr_arr: clr_arr });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Header
            isClicked={this.state.isClicked}
            handelClick={this.handelClick}
          />
          {
            this.state.isClicked === true ? <button className="logout-btn">Logout</button> : null
          }
          <div className="content-wrapper">
            <NavigationDrawer
              userdata={this.state.userProfile}
              active_menu_item={this.state.active_menu_item}
              updateActiveMenu={this.updateActiveMenu}
              subform={this.state.form_submenu}
              subpage={this.state.pages_submenu}
              subcomponent={this.state.components_submenu}
            />

            <Switch>

              <Route exact path="/"
                render={props => (<Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />)}
              />

              <Route path="/dashboard"
                render={props => (<Dashboard clr_arr={this.state.clr_arr} data={this.state.visitor_data} />)}
              />

              <Route path="/apps"
                render={props => (<Apps />)}
              />

              <Route path="/calender"
                render={props => (<Calender />)}
              />

              <Route path="/components/0"
                render={props => (<ButtonLayoutContainer />)}
              />

              <Route path="/components/1"
                render={props => (<CardLayoutContainer />)}
              />

              <Route path="/pages/0"
                render={props => (<Listing product_listing={this.state.product_listing} />)}
              />

              <Route path="/forms/0"
                render={props => (<FormLayout />)}
              />

              <Route path="/table"
                render={props => (<Table />)}
              />

              <Route path="/icons"
                render={props => (<Icons />)}
              />

            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}



/* {
  this.state.form_types.map((item, id) => {
    return (
      <Route path="/forms/:id"
        render={props => (id === 0 ? <FormLayout /> : null)}
      />
    )
  })
} */