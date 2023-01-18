import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

dayjs.extend(advancedFormat);

export const formatDate = function(dateString: string) {
  if (!dateString) return "";
  const date = dayjs(dateString);
  return date.format("Do MMMM, YYYY");
};

export const setDate = function(dateString: string) {
  if (!dateString) return "";
  const date = dayjs(dateString);
  return date.format("YYYY-MM-DD");
};
export const dateTime = function(dateString: string) {
  if (!dateString) return "";
  const date = dayjs(dateString);
  return date.format("Do MMMM, YYYY hh:mm a");
};
export const getTime = function(dateString: string) {
  if (!dateString) return "";
  const date = dayjs(dateString);
  return date.format("hh:mm a");
};
export const getAge = function(dateString: string) {
  if (!dateString) return "";
  const date = dayjs(dateString);
  const today = dayjs();
  const age = today.diff(date, "years", false);
  return age;
};
export const currentDate = dayjs().format("YYYY-MM-DD");
export const time = dayjs().format("hh:mm:ss a");
export const dateSerial = dayjs().format("YYYYMMDD");
export const dateTimeSerial = dayjs().format("YYYYMMDDhhmmss");
export const fullCurrentDate = dayjs().format("Do MMMM, YYYY");
export const dateToday = dayjs(new Date()).format("Do MMMM, YYYY hh:mm:ss a");
export const monthYear = dayjs().format("MMMM YYYY");
export const minMonthYear = dayjs().format("YYYY/MM");
export const monthAgo = dayjs().subtract(1, "month").format("YYYY-MM-DD");
export const rawDate = dayjs().format("YYYY-MM-DD");
