import axios from 'axios';
import AttendanceCalendar from './AttendanceCalendar';
import AttendanceInfo from './AttendanceInfo';
import { useFetch } from '@/hooks/useFetch';
import ContentLoading from '@/components/common/ContentLoading';

function AttendanceContent() {
  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: '/api/attendance/AttendancetTotal',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }
  console.log(
    data.data.attendanceResponse.sort(
      (a, b) => new Date(a.startTime) - new Date(b.startTime)
    )
  );
  return (
    <>
      <AttendanceCalendar />
      <AttendanceInfo attendanceInfo={data.data.attendanceSum} />
    </>
  );
}

export default AttendanceContent;
