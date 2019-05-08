import React from 'react';
import './App.css';
import Header from './components/header'
import NavigationDrawer from './components/navigationDrawer';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-navigation-wrapper">
        <NavigationDrawer />
        <Content />
      </div>
    </div>
  );
}

export default App;
