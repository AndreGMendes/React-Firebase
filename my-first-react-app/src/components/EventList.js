import { Fragment } from 'react';


export default function EventList({eventsProp, handleClickProp}) {
  return (
    <div>
      {eventsProp.map((event, index) => (
        <Fragment key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClickProp(event.id)}>delete event</button>
        </Fragment>
      ))}
    </div>
  );
}
