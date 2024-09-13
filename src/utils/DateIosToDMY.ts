export const formatISODateToDMY = (isoDate: string | null): string => {
  if (!isoDate) return ''; // Handle empty or null values
  return isoDate.split('T')[0];
};
