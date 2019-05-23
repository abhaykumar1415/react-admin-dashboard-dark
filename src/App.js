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

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isClicked: false,
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
      form_types: [
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
      product_listing: {
        title: 'Listing',
        three_column_listing: {
          title: '3 column listing',
          column_one: {
            image: require('./images/download (1).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('./images/download (2).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_three: {
            image: require('./images/download (3).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        },
        two_column_listing: {
          title: "2 Column Listing",
          column_one: {
            image: require('./images/download(4).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit amet',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('./images/download(6).jpeg'),
            product_name: 'Event Name',
            description: 'Lorem ipsum',
            place: 'Shanghai, China',
            day: 'Mon,6 May 2018',
            time: '7:00 PM'
          },
          column_three: {
            image: require('./images/home.jpg'),
            product_name: 'Product Name',
            desc: 'Posted On',
            description: 'Monaco,Europe',
            day: '06 May 2018',
            prize: 'Rs.4.85 Crors'
          },
          column_four: {
            image: require('./images/Events.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        },
        single_column_listing: {
          title: "Single  listing",
          column_one: {
            image: require('./images/home.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs.4.85 Crors'
          },
          column_two: {
            image: require('./images/download(10).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        }
      }
    }
  }

  handelClick = () => {
    console.log("dfghjk");
    this.setState({ isClicked: !this.state.isClicked });
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
              subform={this.state.form_types}
              subpage={this.state.pages_submenu}
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

              <Route path="/components"
                render={props => (<ButtonLayoutContainer />)}
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