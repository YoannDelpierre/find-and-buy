import React, { Component } from 'react';
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
    const [property] = await generateProperties(1);
    await timeout(1000);
    // Simulate loading

    const customers = await generateCustomers(50, property.surface); // Trick to generate for demo customers based on property
    await timeout(1000);
    // Simulate loading

    this.setState({
      isLoading: !this.state.isLoading,
      customers,
      properties: [property]
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
            <Properties properties={properties} customers={customers} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
