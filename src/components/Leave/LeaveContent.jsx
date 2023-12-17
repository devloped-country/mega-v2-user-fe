import axios from "axios";
import ApplicationDetails from "./ApplicationDetails";
import LeaveCalendar from "./LeaveCalendar";
import LeaveEdtior from "./LeaveEditor";
import { useFetch } from "@/hooks/useFetch";
import ContentLoading from "../common/ContentLoading";
import { useState } from "react";

function LeaveContent() {
  const [currentDate, setCurrentDate] = useState(1);
  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "https://user.mzc-appmega.click/api/attendance/getAppliancesById",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  return (
    <>
      <LeaveCalendar data={data} setCurrentDate={setCurrentDate} currentDate={currentDate} />
      <ApplicationDetails data={data} currentDate={currentDate} />
      <LeaveEdtior currentDate={currentDate} />
    </>
  );
}

export default LeaveContent;
