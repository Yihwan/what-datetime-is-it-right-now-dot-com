import React from 'react';

const TimeComponent = ({ date }) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div>
      {`${hour} ${minutes} ${seconds}`}
    </div>
  );
}

export default TimeComponent;