const convertCodeToSymbol = (code) => {
  switch (code) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CAD":
      return "$";
    case "AUD":
      return "$";
    case "SGD":
      return "$";
    case "CNY":
      return "¥";
    case "BTC":
      return "₿";
    default:
      return "₹";
  }
};
export default convertCodeToSymbol;
