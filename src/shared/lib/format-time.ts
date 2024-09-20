export const formatDateToTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    hour: '2-digit',
  };

  return date.toLocaleTimeString('ru-RU', options);
};
