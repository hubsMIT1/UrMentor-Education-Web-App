import React from 'react'
import './times.css'
import { Link } from 'react-router-dom';
function CupIcon() {
    return (
    //   <svg className="ico-cup">
    //     <use xlinkHref="#cup" />
    //   </svg>
    <h1 />
    );
  }
  function CupIcon2() {
    return (
        <h1> hello </h1>
    );
  }
  const dateList = [];
  const startTime = new Date().setHours(6, 0, 0, 0);
  const endTime = new Date().setHours(23, 0, 0, 0);
  for (let time = startTime; time < endTime; time += 1800000) {
    const date = new Date(time);
    const month = date.toLocaleString('default', { month: 'short' });
    const timeString = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dateString = `${month} ${date.getDate()}`;
    dateList.push(
      <Link className='timeSlots' to = {`/slots?${dateString}&${timeString}`}>

      <li key={date} className='timeSlots'>
        {dateString} - {timeString}
        <small> n tutor </small>
      </li>
        </Link>
    );
  }
export default function Times() {
  return (
    <div>
    <div className="leaderboard">
    {/* <h1>
       <CupIcon />
        Most active Players
    </h1> */}
    <ol>
    {
        
    dateList

    }
        {/* <li>
            <mark>Jerry Wood</mark>
            <small>315</small>
        </li>
        <li>
            <mark>Brandon Barnes</mark>
            <small>301</small>
        </li>
        <li>
            <mark>Raymond Knight</mark>
            <small>292</small>
        </li>
        <li>
            <mark>Trevor McCormick</mark>
            <small>245</small>
        </li>
        <li>
            <mark>Andrew Fox</mark>
            <small>203</small>
        </li>
        <li>
            <mark>Andrew Fox</mark>
            <small>203</small>
        </li>
        <li>
            <mark>Andrew Fox</mark>
            <small>203</small>
        </li> */}
    </ol>
</div>

{/* <CupIcon2 /> */}

</div>
  )
}
