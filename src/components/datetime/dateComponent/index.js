import React from 'react';

const DateComponent = ({ date }) => {
  const day = date.getDay();
  const month = date.getMonth(); 
  const year = date.getFullYear();

  return(
    <div>
      {`${day} ${month} ${year}`}
    </div>
  );
}

export default DateComponent;