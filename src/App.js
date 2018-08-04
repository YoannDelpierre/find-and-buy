import React, { Component } from 'react';
import Customers from './components/customers';
import Properties from './components/properties';
import { generateCustomers } from './api/customers';
import { generateProperties } from './api/properties';
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
    const properties = await generateProperties(1);

    // Simulate loading
    await timeout(2000);
    this.setState({
      isLoading: !this.state.isLoading,
      customers,
      properties,
    });
  }

  render() {
    const { isLoading, customers, properties } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {isLoading ? <span>Loading</span> : <span>Find and Buy</span>}
        </header>
        {!isLoading && (
          <div className="App-columns">
            <Properties properties={properties} />
            <Customers customers={customers} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
