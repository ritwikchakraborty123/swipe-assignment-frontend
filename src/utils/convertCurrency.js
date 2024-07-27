import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  process.env.REACT_APP_FREE_CURRENCY_API_KEY
);
const convertCurrencyApi = async (from, to) => {
  try {
    let response = await freecurrencyapi.latest({
      base_currency: from,
      currencies: to,
    });

    return response.data[to];
  } catch (e) {
    console.log("error", e);
  }
  return 0;
};
export default convertCurrencyApi;
