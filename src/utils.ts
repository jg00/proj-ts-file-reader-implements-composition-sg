export const dateStringToDate = (dateString: string): Date => {
  // 28/08/2018 > [28, 8, 2018]
  const [day, month, year] = dateString
    .split("/")
    .map((value: string): number => {
      return parseInt(value);
    });

  return new Date(year, month - 1, day);
};
