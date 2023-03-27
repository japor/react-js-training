import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import { ErrorBoundary } from './components/ErrorBoundary';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ErrorBoundary>
          <StudentForm />
        </ErrorBoundary>
        {ReactDOM.createPortal(
          <h1>This element is inside the portal</h1>,
          document.getElementById('my-portal')
        )}
      </div>
    );
  }
}

export default App;
