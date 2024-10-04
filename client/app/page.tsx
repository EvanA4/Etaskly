'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Header from './components/header';
import NotIn from './components/notIn';
import Loading from './components/loading';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div><Header/><Loading/></div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Header/>
      {user ? (
        <div>
          <img src={user?.picture ?? ''} alt={user?.name ?? ''} className='rounded-full'/>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : <NotIn/>}
    </div>
  );
}

/*
'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function Home() {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,timeGridDay'
        }}
        initialView="timeGridDay"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        resources={[
          { id: 'a', title: 'Auditorium A' },
          { id: 'b', title: 'Auditorium B', eventColor: 'green' },
          { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
        ]}
        initialEvents={[
          { title: 'event1', start: new Date(), resourceId: 'a' },
          { title: 'event2', start: new Date(), resourceId: 'a' },
          { title: 'event3', start: new Date(), resourceId: 'a' },
          { title: 'event4', start: new Date(), resourceId: 'a' },
          { title: 'event5', start: new Date(), resourceId: 'a' },
        ]}
        eventContent={(eventInfo) => {
          return (
            <>
              <b>{eventInfo.timeText}</b>
              <i>{eventInfo.event.title}</i>
            </>
          );
        }}
      />
    </div>
  );
}
*/