import React, { Component } from 'react';
import './App.css';
import IndexPage from './pages/index'

class App extends Component {
  state = {
    notes: {
      1: {
        _id: 1,
        title: 'hello world',
        body: 'this is the body',
        updatedAt: new Date()
      },
      2: {
        _id: 2,
        title: 'hello world again',
        body: 'this is the body again',
        updatedAt: new Date()
      }
    }
  }
  render() {
    return (
      <div className="App">
        <IndexPage notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
