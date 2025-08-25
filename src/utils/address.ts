/* Address utilities */

export const formatAddress = (address: { street: string, city: string, state: string, zip: string, country: string }): string => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}, ${address.country}`;
};

export const validateZipCode = (zip: string, country: string): boolean => {
  const regexes: { [key: string]: RegExp } = {
    'US': /^\d{5}(-\d{4})?$/,
    'CA': /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
    // Add more country-specific regexes here
  };
  const regex = regexes[country];
  return regex ? regex.test(zip) : false;
};