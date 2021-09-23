import * as React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import Welcome from './Welcome';

afterEach(cleanup);

describe('Welcome', () => {
  it('should return a greeting', () => {
    const welcomeText = 'Get a reward any time you make a winning bet!';

    const notFoundText = 'Not found text';

    const { toJSON, getByText, queryByText } = render(<Welcome />);

    const foundWelcomeTextElement = getByText(welcomeText);
    const notFoundTextElement = queryByText(notFoundText);

    expect(foundWelcomeTextElement.props.children).toEqual(welcomeText);
    expect(notFoundTextElement).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should find the skip button via text', () => {
    const text = 'Skip';

    const { getByText } = render(<Welcome />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the login button via accessibilityLabel', () => {
    const accessibilityLabel = 'Log in';

    const { getByA11yLabel } = render(<Welcome />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the sign up button via accessibilityLabel', () => {
    const accessibilityLabel = 'Sign up';

    const { getByA11yLabel } = render(<Welcome />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });
});
