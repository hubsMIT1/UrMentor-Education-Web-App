import React from 'react';

function App() {
  const dateList = [];
  const startTime = new Date().setHours(6, 0, 0, 0);
  const endTime = new Date().setHours(23, 0, 0, 0);
  
  for (let time = startTime; time < endTime; time += 1800000) {
    const date = new Date(time);
    const month = date.toLocaleString('default', { month: 'short' });
    const timeString = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dateString = `${month} ${date.getDate()}`;
    dateList.push(
      <li key={date}>
       <Link to=''> {dateString} - {timeString}</Link>
      </li>
    );
  }

  return (
    <div>
      <h2>Date List</h2>
      <ul>{dateList}</ul>
    </div>
  );
}

export default App;
