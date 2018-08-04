import React from 'react';
import Properties from './Properties';
import { generateUniqueProperty } from '../api/properties';
import { generateCustomers } from '../api/customers';
import { shallow } from 'enzyme';

describe('Properties', () => {
    it('should render component', () => {
        const properties = [
            generateUniqueProperty(),
        ];
        const customers = [];
        const wrapper = shallow(<Properties properties={properties} customers={customers}/>);
        expect(wrapper.find('[data-test="property"]')).toHaveLength(1);
        expect(wrapper.find('[data-test="property-find"]')).toHaveLength(1);
        expect(wrapper.find('[data-test="customers-match"]')).toHaveLength(0);
    });

    it('should render display customers', () => {
        const properties = [
            generateUniqueProperty(),
        ];
        const customers = [];
        const wrapper = shallow(<Properties properties={properties} customers={customers}/>);
        wrapper.setState({ customerMatch: generateCustomers(50), hasClicked: false });
        wrapper.find('[data-test="property-find"]').simulate('click');
        expect(wrapper.find('[data-test="property-find"]')).toHaveLength(1);
    });
});