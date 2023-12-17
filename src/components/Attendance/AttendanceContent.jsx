import axios from "axios";
import AttendanceCalendar from "./AttendanceCalendar";
import AttendanceInfo from "./AttendanceInfo";
import { useFetch } from "@/hooks/useFetch";
import ContentLoading from "@/components/common/ContentLoading";

function AttendanceContent() {
  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "https://user.mzc-appmega.click/api/attendance/AttendancetTotal",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  const sortedAttendance = data.data.attendanceResponse.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  return (
    <>
      <AttendanceCalendar sortedAttendance={sortedAttendance} />
      <AttendanceInfo attendanceInfo={data.data.attendanceSum} />
    </>
  );
}

export default AttendanceContent;
