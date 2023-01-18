import numeral from "numeral";
import { ToWords } from "to-words";

const converter = new ToWords({
  localeCode: "en-GH",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
  },
});

export const formatNumber = (value: number | string) => {
  return numeral(value).format("0,0[.]0000");
};

export const formatWholeNumber = (value: number | string) => {
  return numeral(value).format("0,0");
};

export const formatDecimal = (value: number | string) => {
  return numeral(value).format("0,0.000000");
};

export const formatDecimal2 = (value: number | string) => {
  return numeral(value).format("0,0.00");
};

export const formatCedis = (value: number | string) => {
  return "GHS " + numeral(value).format("0,0.00");
};

export const getRandomNumber100 = () => {
  return Math.random() * 164.89 + 1;
};

export const getAmtWords = (amount: number) => {
  return converter.convert(amount);
};

// module.exports = {
//   formatNumber,
//   formatWholeNumber,
//   formatDecimal,
//   formatDecimal2,
//   getAmtWords,
//   formatCedis,
//   getRandomNumber100,
// };
