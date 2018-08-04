import React, { Component } from 'react';
import './Properties.css';

class Properties extends Component {
    render() {
        const { properties } = this.props;
       return (
            <ul className="Properties">
                {properties.map((property, index) => {
                    const isFlat = property.type === 'flat';
                    return (
                        <li key={`property-${index}`} className="Property">
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
                            <button className="PropertyFind">Find a customer</button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Properties;