import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { App } from './App';

// @ts-expect-error
const mocks: Record<string, any>[] = [];

describe('[App.tsx]', () => {
    it('renders without crashing', () => {
        const { unmount } = render(
            // @ts-expect-error
            <MockedProvider mocks={mocks} addTypename={false}>
                <App />
            </MockedProvider>
        );

        unmount();
    });
});
