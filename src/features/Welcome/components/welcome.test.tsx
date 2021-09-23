import * as React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { en } from 'shared/i18n';
import Welcome from './Welcome';

afterEach(cleanup);

describe('Welcome', () => {
  it('should return a greeting', () => {
    const { welcomeText } = en.welcome;

    const { toJSON, getByText } = render(<Welcome />);

    const foundWelcomeTextElement = getByText(welcomeText);

    expect(foundWelcomeTextElement.props.children).toEqual(welcomeText);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should not find text that does not exist in the DOM', () => {
    const notFoundText = 'This text does not exist';

    const { queryByText } = render(<Welcome />);

    const notFoundTextElement = queryByText(notFoundText);

    expect(notFoundTextElement).toBeNull();
  });

  it('should find the skip button via text', () => {
    const text = en.welcome.skip;

    const { getByText } = render(<Welcome />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the login button via accessibilityLabel', () => {
    const accessibilityLabel = en.welcome.login;

    const { getByA11yLabel } = render(<Welcome />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the sign up button via accessibilityLabel', () => {
    const accessibilityLabel = en.welcome.signup;

    const { getByA11yLabel } = render(<Welcome />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });
});
