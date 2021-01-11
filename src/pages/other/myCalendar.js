import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import Events from "../../data/calendar/events";
import { myseo } from "../../data/SEO/contact";
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const initdate = [
  {
    id: 0,
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "我選的日期1",
  },
  {
    id: 1,
    start: moment().add(10, "days").toDate(),
    end: moment().add(11, "days").toDate(),
    title: "我選的日期2",
  },
  {
    id: 2,
    start: moment().add(5, "days").toDate(),
    end: moment().add(5, "days").toDate(),
    title: "我選的日期3",
  },
];

moment.locale("zh-tw");
const localizer = momentLocalizer(moment);
console.log(localizer);
const DnDCalendar = withDragAndDrop(Calendar);

const MyCalendar = (props) => {
  const [nowdate, setnowdate] = useState(initdate);

  const onEventResize = (event) => {
    onEventDrop(event);
  };

  const onEventDrop = (event) => {
    //刪除舊的位置
    const events = nowdate;
    const idx = events.indexOf(event);
    const nextEvents = [...events];
    nextEvents.splice(idx, 1);
    setnowdate(nextEvents);
    //新位置
    nowdate[event.event.id].start = event.start;
    nowdate[event.event.id].end = event.end;
    setnowdate(nowdate);
    console.log(nowdate);
  };

  return (
    <div className="container-fiule">
      <div className="row">
        <div className="col-12">
          <LayoutFour myseo={myseo}>
            <Breadcrumb title="我的日曆">
              <BreadcrumbItem name="Home" />
              <BreadcrumbItem name="我的日曆" current />
            </Breadcrumb>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9">
                <DnDCalendar
                  views={{
                    month: true,
                    week: true,
                    day: false,
                  }}
                  localizer={localizer}
                  events={nowdate}
                  style={{ height: "60vh" }}
                  onEventDrop={onEventDrop}
                  onEventResize={onEventResize}
                  resizable
                  selectable
                />
              </div>
            </div>
          </LayoutFour>
        </div>
      </div>
    </div>
  );
};
export default MyCalendar;
