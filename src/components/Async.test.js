import {render, screen} from '@testing-library/react'
import Async from './Async'


describe('Async component', () => {
    test('renders posts if request succeeds', async () => {

        // With that code we are overriding the built in fetch function with our dummy fetch function, 
        // where we set the actual value this promise should return with help of these Jest features

        // Now we are simulating this success case here. We are simulating this success case and we're not 
        // actually sending a request to the API. And therefore we're not hammering that API, we're not sending 
        // unnecessary requests. We are reducing the amount of network traffic,we also avoid potential problems 
        // if the server is down and our tests would fail for that reason.

        // To summarize, we're overriding the built-in fetch function with a mock to simulate a successful response, 
        // avoiding actual API calls. This reduces network traffic and prevents test failures if the server is down.


        // jest.fn() creates a mock function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}]
        });
        render(<Async />)

        // getAllByRole returns all matching elements as an array.
        // const listItemElements = screen.getAllByRole('listitem');

        // findAllByRole returns a promise that resolves to an array of all elements matching a specific role.
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    }); 
})



