// @ts-nocheck

import React, { useEffect, useState } from "react";
import CalanderEvent from "./components/CalanderEvent";
import CalenderDiv from "./components/CalenderDivDay";
import { events } from "./events"
import { configurationEvents, convertHourstoMinute } from "./utils/features";
function App() {
  const [eventsState, setEventesState] = useState([])
  const [eventsSuccessive, setEventsSuccessive] = useState([])

  //  rerender data events to facilitate reading and writing 
  useEffect(() => {
    const arr = []
    for (let index = 0; index < events.length; index++) {
      const id = events[index].id
      const start = events[index].start;
      const duration = events[index].duration;
      const element = convertHourstoMinute(start, duration);
      arr.push({ id, ...element })
    }
    setEventesState(arr)
  }, [])

  useEffect(() => {
    if (!eventsState) return;
    const data = configurationEvents(eventsState)
    setEventsSuccessive(data)
  }, [eventsState])


  return <div className="App">
    {
      [...Array(24)].map((elem, i) => <CalenderDiv key={i} time={i.toFixed(2)} />)
    }

    {
      eventsSuccessive?.map((elements) => {

        const lengthEvents = elements.eventsSuccessive.length
        return elements.eventsSuccessive.map((event, i) => <CalanderEvent key={event.id} i={i} lengthEvents={lengthEvents} event={event} events={eventsState} />)
      })


    }

  </div>;
}

export default App;
