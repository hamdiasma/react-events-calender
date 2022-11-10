// @ts-nocheck

import React, { useEffect, useState } from "react";
import CalenderDiv from "./components/CalenderDivDay";
import { events } from "./events"
import { convertHourstoMinute } from "./utils/features";
function App() {
  const [eventsState, setEventesState] = useState([])


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




  return <div className="App">
    {
      [...Array(24)].map((elem, i) => <CalenderDiv key={i} time={i.toFixed(2)} />)
    }
  </div>;
}

export default App;
