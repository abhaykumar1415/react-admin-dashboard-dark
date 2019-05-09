import React from 'react';
import './App.css';
import Header from './components/header'
import NavigationDrawer from './components/navigationDrawer';
import Content from './components/content';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    }
  }


  handelClick = () => {
    console.log("dfghjk");
    this.setState({ isClicked: !this.state.isClicked });
  }
  render() {
    return (
      <div className="App" >
        <Header
          isClicked={this.state.isClicked}
          handelClick={this.handelClick}
        />
        <div className="content-navigation-wrapper">
          <NavigationDrawer />
          <Content />
        </div>
        {
          this.state.isClicked === true ? <button className="logout-btn">Logout</button> : null
        }
      </div>
    );
  }
}

export default App;
