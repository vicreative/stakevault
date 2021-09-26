import * as React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { en } from 'shared/i18n';
import Login from './Login';

afterEach(cleanup);

describe('Login', () => {
  it('should return a title', () => {
    const testIdName = en.login.title;

    const { getByTestId } = render(<Login />);

    const foundTitleElement = getByTestId(testIdName);

    expect(foundTitleElement).toBeTruthy();
  });

  it('should return a sub text', () => {
    const { subText } = en.login;

    const { toJSON, getByText } = render(<Login />);

    const foundSubTextElement = getByText(subText);

    expect(foundSubTextElement.props.children).toEqual(subText);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should not find text that does not exist in the DOM', () => {
    const notFoundText = 'This text does not exist';

    const { queryByText } = render(<Login />);

    const notFoundTextElement = queryByText(notFoundText);

    expect(notFoundTextElement).toBeNull();
  });

  it('should find the register button via text', () => {
    const text = en.login.registerLink;

    const { getByText } = render(<Login />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the forgot password button via text', () => {
    const text = en.login.forgotPassword;

    const { getByText } = render(<Login />);

    const foundButton = getByText(text);

    expect(foundButton.props.children).toEqual(text);
  });

  it('should find the login button via accessibilityLabel', () => {
    const accessibilityLabel = en.login.signin;

    const { getByA11yLabel } = render(<Login />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the close button via accessibilityLabel', () => {
    const accessibilityLabel = en.login.close;

    const { getByA11yLabel } = render(<Login />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the email text field via accessibilityLabel', () => {
    const accessibilityLabel = en.login.email;

    const { getByA11yLabel } = render(<Login />);

    const foundTextField = getByA11yLabel(accessibilityLabel);

    expect(foundTextField).toBeTruthy();
  });

  it('should find the password text field via accessibilityLabel', () => {
    const accessibilityLabel = en.login.password;

    const { getByA11yLabel } = render(<Login />);

    const foundTextField = getByA11yLabel(accessibilityLabel);

    expect(foundTextField).toBeTruthy();
  });
});
