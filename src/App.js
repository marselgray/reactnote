import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index'
import ShowPage from './pages/show';
import Navbar from './components/navbar';

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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className='app-content'>
            <Route exact path='/' component={(props) => <IndexPage {...props} notes={this.state.notes}/> }/>
            <Route exact path='/notes/:id' component={(props) => <ShowPage {...props} note={this.state.notes[props.match.params.id]} /> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
