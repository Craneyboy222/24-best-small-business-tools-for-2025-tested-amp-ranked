/* Phone utilities */

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export const formatPhoneNumber = (phoneNumber: string, region: string): string | null => {
  try {
    const number = phoneUtil.parse(phoneNumber, region);
    return phoneUtil.format(number, PNF.INTERNATIONAL);
  } catch (error) {
    return null;
  }
};

export const isValidPhoneNumber = (phoneNumber: string, region: string): boolean => {
  try {
    const number = phoneUtil.parse(phoneNumber, region);
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
};