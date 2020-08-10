import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Issue from './Issue';

configure({ adapter: new Adapter() });

describe('Issue', () => {
    let wrapper;
    const labels = [
        {
            node: {
                name: 'Sample name',
                color: 'ffffff',
            },
        },
        {
            node: {
                name: 'Sample name 2',
                color: 'ffffff',
            },
        },
    ];
    const assignees = [{ node: { avatarUrl: 'randomUrl' } }, { node: { avatarUrl: 'randomUrl2' } }];
    beforeEach(() => {
        wrapper = shallow(<Issue labels={labels} assignees={assignees} />);
    });
    it('mounts succesfully', () => {
        const component = wrapper.find('.issue');
        expect(component).toHaveLength(1);
    });
    it('renders a list of labels from the provided list', () => {
        const issueLeft = wrapper.find('.issue').find('.issue-left');
        expect(issueLeft.children().find('Label')).toHaveLength(2);
    });
    it('renders a list of assignees from the provided list', () => {
        const images = wrapper.find('.issue').find('.issue-right').find('.images');
        expect(images.children().find('img')).toHaveLength(2);
    });
});
