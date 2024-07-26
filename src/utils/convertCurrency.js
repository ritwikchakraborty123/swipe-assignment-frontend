import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_SPuM1btFXCSppCi0MjdRnNLxcGQlChe7tLuFjXIE"
);
const convertCurrencyApi = async (from, to) => {
  try {
    let response = await freecurrencyapi.latest({
      base_currency: from,
      currencies: to,
    });

    console.log(from, to, response.data[to]);
    return response.data[to];
  } catch (e) {
    console.log("error", e);
  }
  return 0;
};
export default convertCurrencyApi;
