// convert hours to minutes
export const convertHourstoMinute = (start, duration) => {
  let [hours, minutes] = start.split(":");
  const startDate = +hours * 60 + +minutes;
  const endDate = +hours * 60 + +minutes + duration;
  const t = (startDate / 60) * 100;
  const e = (endDate / 60) * 100;
  return { startDate, endDate, t, e };
};

export const configurationEvents = events => {
  if (events.length === 0) return;

  const allEvents = [];
  let newEvt = {
    start: events[0].startDate,
    end: events[0].endDate,
    eventsSuccessive: [events[0]]
  };
  for (let index = 0; index < events.length; index++) {
    const element1 = events[index];
    const element2 = events[index + 1];
    if (element2?.startDate >= element1.startDate && element2?.startDate < element1.endDate) {
      newEvt = {
        ...newEvt,
        end: element2?.endDate > element1.endDate ? element2?.endDate : element1.endDate,
        eventsSuccessive: [...newEvt.eventsSuccessive, element2]
      };
    } else if (element2?.startDate >= element1.endDate) {
      allEvents.push({ newEvt });
      newEvt = {
        start: element2?.startDate,
        end: element2?.endDate,
        eventsSuccessive: [element2]
      };
    }
  }
  allEvents.push({ newEvt });
  return allEvents;
};
