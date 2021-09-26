import { isNumeric, isValidPhoneNumber } from 'shared/utils';

describe('Numeric string tests', () => {
  it('should be truthy for a numeric string', () => {
    const isANumber = isNumeric('09089354879');
    expect(isANumber).toBeTruthy();
  });
  it('should be falsy for a alpha string', () => {
    const isNotANumber = !isNumeric('thisIsNotANumberAtAll');
    expect(isNotANumber).toBeTruthy();
  });
});

describe('Phone number pattern tests', () => {
  it('should be truthy if a string is a phone number', () => {
    const isAPhoneNumber = isValidPhoneNumber('08176645245');
    expect(isAPhoneNumber).toBeTruthy();
  });
  it('should be falsy if a string is not a phone number', () => {
    const isNotAPhoneNumber = !isValidPhoneNumber('thisIsNotAPhoneNumberAtAll');
    expect(isNotAPhoneNumber).toBeTruthy();
  });
});
