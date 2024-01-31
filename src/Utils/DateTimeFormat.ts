export const dateTimeFormat = (apiDate: any) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };

  const apiDateTime = new Date(apiDate);
  const formattedDate = apiDateTime.toLocaleString('en-US', options);

  return formattedDate;
};
