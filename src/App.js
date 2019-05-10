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
import Pages from './components/pages';
import Icons from './components/icons';

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
    console.log("active-menu :", this.state.active_menu_item);
    return (
      <div className="app">
        <Header
          isClicked={this.state.isClicked}
          handelClick={this.handelClick}
        />
        {
          this.state.isClicked === true ? <button className="logout-btn">Logout</button> : null
        }
        <Router>
          <div className="content-wrapper">
            <NavigationDrawer
              userdata={this.state.userProfile}
              active_menu_item={this.state.active_menu_item}
              updateActiveMenu={this.updateActiveMenu}
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

              <Route path="/pages"
                render={props => (<Pages />)}
              />

              <Route path="/forms"
                render={props => (<Form />)}
              />

              <Route path="/icons"
                render={props => (<Icons />)}
              />

              {/* <Route path="/location"
                render={props => (<Location />)}
              />

              <Route path="/mobileview"
                render={props => (<MobileView />)}
              /> */}

            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}



// render() {
//   return (
//     <div className="App" >
//       <Header
//         isClicked={this.state.isClicked}
//         handelClick={this.handelClick}
//       />
//       <div className="content-navigation-wrapper">
//         <NavigationDrawer />
//         <Content />
//       </div>
//       {
//         this.state.isClicked === true ? <button className="logout-btn">Logout</button> : null
//       }
//     </div>
//   );
// }
// }