//CONVERT NUMBERS TO WELL FORMATTED NAIRA CURRENCY
export const formatMoney = (value, currency = "NGN", locale = "en-NG") => {
  value = Number(value);
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(value);
};

export const orderStatusColor = (status) => {
  const color =
    status == "PENDING" || status == "PROCESSING"
      ? "bg-warning"
      : status == "READYFORPICKUP" || status == "SHIPPED"
      ? "bg-[#0D6C8C]"
      : status == "DELIVERED" || status == "FULFILLED"
      ? "bg-[#00AB11]"
      : "bg-accent";
  return color;
};
