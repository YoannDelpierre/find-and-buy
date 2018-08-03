import React, { Component } from 'react';
import Customers from './components/customers';
import Properties from './components/properties';
import './App.css';

const timeout = ms => new Promise(res => setTimeout(res, ms))

class App extends Component {
  constructor(args) {
    super(...args);
    this.state = {
      isLoading: true,
      customers: [],
      properties: [],
    };
  }

  async componentDidMount() {
    const customers = await generateCustomers();
    const properties = await generateProperties();

    // Simulate loading
    await timeout(2000);
    this.setState({
      isLoading: !this.state.isLoading,
      customers,
      properties,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
