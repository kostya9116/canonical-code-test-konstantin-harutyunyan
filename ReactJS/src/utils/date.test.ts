import { convertDateFormat } from './date';

describe('convertDateFormat', () => {
  it('should convert valid date string to formatted date string', () => {
    // Arrange
    const dateString: string = '2023-06-18';
    const expected: string = '18 June 2023';

    // Act
    const result: string | null = convertDateFormat(dateString);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return null for empty date string', () => {
    // Arrange
    const dateString: string = '';
    const expected: null = null;

    // Act
    const result: string | null = convertDateFormat(dateString);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return null for invalid date string', () => {
    // Arrange
    const dateString: string = 'some invalid text';
    const expected: null = null;

    // Act
    const result: string | null = convertDateFormat(dateString);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return null for invalid date string', () => {
    // Arrange
    const dateString: string = '2023-99-99';
    const expected: null = null;

    // Act
    const result: string | null = convertDateFormat(dateString);

    // Assert
    expect(result).toEqual(expected);
  });
});