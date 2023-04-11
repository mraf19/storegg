export const numberFormat = (number: number) => {
  return new Intl.NumberFormat("id-ID").format(number);
};
