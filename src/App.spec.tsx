import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

const mocks = [];

describe('[App.tsx]', () => {
    it('renders without crashing', () => {
        const app = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <App />
            </MockedProvider>
        );

        expect(app).toHaveLength(1);
    });
});
