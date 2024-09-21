export const sortDates = (date1: Date, date2: Date) =>
  Math.floor(date2.getTime() - date1.getTime());
