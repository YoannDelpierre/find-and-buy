import React, { Component } from 'react';
import Customers from './customers';
import { matchProperty } from '../utils/matchCustomerAndProperty';
import './Properties.css';

class Properties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customersMatch: [],
        };
    }

    findACustomer(property) {
        const { customers } = this.props;
        const customersMatch = matchProperty(property, customers);
        this.setState({
            hasClicked: true,
            customersMatch,
        })
    }

    render() {
        const { properties, customers: customersProps } = this.props;
        const { customersMatch, hasClicked } = this.state;
        return (
            <div>
                <div className="Properties">
                    {properties.map((property, index) => {
                        const isFlat = property.type === 'flat';
                        return (
                            <div key={`property-${index}`}>
                                <div className="Property">
                                    <div>Type : {property.type}</div>
                                    <div>Price : {property.price}</div>
                                    <div>Surface : {property.surface}m</div>
                                    <div>Rooms : {property.rooms}</div>
                                    <div>Cave : {property.cave ? (<span>👍</span>) : (<span>👎</span>)}</div>
                                    {isFlat && property.elevator && (
                                        <div>Elevator : <span>👍</span></div>
                                    )}
                                    {!isFlat && (
                                        <div>Garden : {property.garden}m</div>
                                    )}
                                </div>
                                <button className="Button" onClick={() => this.findACustomer(property)}>
                                    Find a customer in our {customersProps.length} customers
                                </button>
                            </div>
                        )
                    })}
                </div>
                {customersMatch.length > 0 && hasClicked && (
                    <Customers customers={customersMatch}/>
                )}
            </div>
        );
    }
}

export default Properties;