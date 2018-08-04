import React from 'react';
import Search from './search';
import { shallow } from 'enzyme';

describe('Search', () => {
    it('should render correct number item', () => {
        const props = {
            budget: 1000,
            surface: 10,
            room: 2,
            score: 3,
        }
        const wrapper = shallow(<Search search={props} />);
        expect(wrapper.find('li')).toHaveLength(4);
    });
});