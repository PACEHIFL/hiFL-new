//CONVERT NUMBERS TO WELL FORMATTED NAIRA CURRENCY
export const formatMoney = (value, currency = "NGN", locale = "en-NG") => {
  value = Number(value);
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(value);
};

//CONVERT SENTENCES TO SLUG
export const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
