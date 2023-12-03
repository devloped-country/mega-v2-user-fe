import ApplicationDetails from './ApplicationDetails';
import LeaveCalendar from './LeaveCalendar';
import LeaveEdtior from './LeaveEditor';

function LeaveContent() {
  return (
    <>
      <LeaveCalendar />
      <ApplicationDetails />
      <LeaveEdtior />
    </>
  );
}

export default LeaveContent;
