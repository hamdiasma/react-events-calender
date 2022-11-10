// @ts-nocheck
import React from 'react'

function CalanderEvent({ event, lengthEvents, i }) {
    console.log({ i })
    const { e, endDate, id, startDate, t } = event
    const eventStyle = {
        top: `${t}px`,
        height: `${e - t}px`,
        left: i * (window.innerWidth / lengthEvents),
        width: window.innerWidth / lengthEvents,
    }



    return (
        <div className='calanderEvent' style={eventStyle}> Event {id}

        </div >
    )
}

export default CalanderEvent