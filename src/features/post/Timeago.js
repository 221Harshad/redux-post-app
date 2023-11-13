import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns';

const Timeago = ({timeStamp}) => {
    let timeago ="";
    if (timeStamp){
        const date = parseISO(timeStamp);
        const timePeriod = formatDistanceToNow(date)
        timeago = `${timePeriod} ago`
    }
  return (
    <span>
        &nbsp; <i>{timeago}</i>
        </span>
  )
}

export default Timeago