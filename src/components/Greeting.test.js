// Writing Tests The Three A's

// Abstract: Set up the test data, test conditions 
        //  and test environment.
// Act: Run logic that should be tested.
// Assert: Compare execution results with expected results.

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component', () => {
     test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting/>)
    // Act
    
    // Assert
    const helloWorldElement = screen.getByText('Hello World', {exact: false});
    expect(helloWorldElement).toBeInTheDocument();
    // If we want to not to be in the document,
    // expect(helloWorldElement).not.toBeInTheDocument();
});

    test('renders good to see you if the button was NOT clicked.', () => {
        render(<Greeting />)
        const outPutElement = screen.getByText('good to see you', {exact: false});
        expect(outPutElement).toBeInTheDocument();
    });
    test('render Changed! if the button was clicked.', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        const outPutElement = screen.getByText('Changed!');
        expect(outPutElement).toBeInTheDocument();
    });
    test('does not render good to see you if the button was clicked.', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        // Assert
        // If the element is not found, queryByText returns null.
        const outPutElement = screen.queryByText('good to see you', { exact: false });
        expect(outPutElement).toBeNull();
    })
});


