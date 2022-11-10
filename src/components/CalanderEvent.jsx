// @ts-nocheck
import React, { useState } from 'react'

function CalanderEvent({ events, event }) {
    const { e, endDate, id, startDate, t } = event
    const eventStyle = {
        top: `${t}px`,
        height: `${e - t}px`,
        width: "50%",
    }



    return (
        <div className='calanderEvent' style={eventStyle}> Event </div >
    )
}

export default CalanderEvent