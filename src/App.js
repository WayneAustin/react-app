import React, { Component } from 'react';
import Form from './components/containers/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Reactive forms</h1>
        </header>
        <Form></Form>
      </div>
    );
  }
}

export default App;
