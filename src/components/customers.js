import React, { Component } from 'react';
import Search from './search';
import './Customers.css';
import '../App.css';

class Customers extends Component {
    render() {
    const { customers } = this.props;
    return (
        <div>
                <h1>{customers.length} matches</h1>
            <div className="Customers">
            {customers
                .sort((a, b) => {
                    if(a.search.score > b.search.score) {
                        return -1;
                    }
                    if(a.search.score < b.search.score) {
                        return 1;
                    }
                    return 0;
                })
                .map((customer, index) => {
                return (
                    <div className="Customer" key={`customer-${index}`}>
                        <ul className="Customer-List">
                            <li>{customer.firstName} {customer.lastName}</li>
                            <li>{customer.phone}</li>
                            <li>{customer.email}</li>
                        </ul>
                        <Search search={customer.search}/>
                    </div>
                )
            })}
            </div>
        </div>
    );
    }
}

export default Customers;