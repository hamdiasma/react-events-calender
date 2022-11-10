// convert hours to minutes
export const convertHourstoMinute = (start, duration) => {
  let [hours, minutes] = start.split(":");
  const startDate = +hours * 60 + +minutes;
  const endDate = +hours * 60 + +minutes + duration;
  const t = (startDate / 60) * 100;
  const e = (endDate / 60) * 100;
  return { startDate, endDate, t, e };
};
