import * as React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { en } from 'shared/i18n';
import Register from './Register';

afterEach(cleanup);

describe('Register', () => {
  it('should return a title', () => {
    const { title } = en.register;

    const { toJSON, getByText } = render(<Register />);

    const foundTitleElement = getByText(title);

    expect(foundTitleElement.props.children).toEqual(title);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should return a sub text', () => {
    const { subText } = en.register;

    const { toJSON, getByText } = render(<Register />);

    const foundSubTextElement = getByText(subText);

    expect(foundSubTextElement.props.children).toEqual(subText);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should not find text that does not exist in the DOM', () => {
    const notFoundText = 'This text does not exist';

    const { queryByText } = render(<Register />);

    const notFoundTextElement = queryByText(notFoundText);

    expect(notFoundTextElement).toBeNull();
  });

  it('should find the create account button via text', () => {
    const text = en.register.signup;

    const { getByText } = render(<Register />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the login button via text', () => {
    const text = en.register.loginLink;

    const { getByText } = render(<Register />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the close button via accessibilityLabel', () => {
    const accessibilityLabel = en.register.close;

    const { getByA11yLabel } = render(<Register />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the email text field via accessibilityLabel', () => {
    const accessibilityLabel = en.register.email;

    const { getByA11yLabel } = render(<Register />);

    const foundTextField = getByA11yLabel(accessibilityLabel);

    expect(foundTextField).toBeTruthy();
  });

  it('should find the username text field via accessibilityLabel', () => {
    const accessibilityLabel = en.register.username;

    const { getByA11yLabel } = render(<Register />);

    const foundTextField = getByA11yLabel(accessibilityLabel);

    expect(foundTextField).toBeTruthy();
  });

  it('should find the password text field via accessibilityLabel', () => {
    const accessibilityLabel = en.register.password;

    const { getByA11yLabel } = render(<Register />);

    const foundTextField = getByA11yLabel(accessibilityLabel);

    expect(foundTextField).toBeTruthy();
  });
});
