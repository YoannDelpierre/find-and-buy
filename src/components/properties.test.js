import React from 'react';
import Properties from './Properties';
import { generateUniqueProperty } from '../api/properties';
import { shallow } from 'enzyme';

describe('Properties', () => {
    it('should render correct number item', () => {
        const properties = [
            generateUniqueProperty(),
        ];
        const customers = [];
        const wrapper = shallow(<Properties properties={properties} customers={customers}/>);
        expect(wrapper.find('[data-test="property"]')).toHaveLength(1);
    });
});