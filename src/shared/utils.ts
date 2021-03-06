import { PHONE_REGEX } from 'shared/constants';

/**
 * Checks if a string is numeric in nature.
 * @param {String} str
 * @returns {Boolean}
 */
export function isNumeric(str: string): Boolean {
  return (
    !isNaN(str as any) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str as any))
  ); // ...and ensure strings of whitespace fail
}

export const isValidPhoneNumber = (phoneNumber: string) => PHONE_REGEX.test(phoneNumber);
