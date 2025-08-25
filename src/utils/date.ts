import { format, parseISO } from 'date-fns';

export const formatDate = (date: Date | string, dateFormat = 'yyyy-MM-dd'): string => {
  try {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(parsedDate, dateFormat);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

export const isValidDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};