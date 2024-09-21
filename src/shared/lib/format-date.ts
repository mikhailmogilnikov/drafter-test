export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  };

  return date.toLocaleDateString('ru-RU', options);
};

export const formatDateToDateWithTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    minute: '2-digit',
    hour: '2-digit',
  };

  return date.toLocaleDateString('ru-RU', options);
};
