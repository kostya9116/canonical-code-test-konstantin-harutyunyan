
/**
 Converts a date string to a formatted date string in the format "day month year".
 @param {string} dateString - The date string to convert.
 @returns {string | null} The formatted date string, or null if dateString is empty or undefined.
 */
export const convertDateFormat = (dateString: string): string | null => {
  if (!dateString) {
    return null;
  }

  const date: Date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null;
  }

  const day: number = date.getDate();
  const month: string = date.toLocaleString('default', { month: 'long' });
  const year: number = date.getFullYear();

  return `${day} ${month} ${year}`;
}

