import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Sidebar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
