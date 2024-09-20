export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  };

  return date.toLocaleDateString('ru-RU', options);
};

export const formatDateToDayAndMonth = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };

  return date.toLocaleDateString('ru-RU', options);
};
