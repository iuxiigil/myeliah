import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import Events from "../../data/calendar/events";
import { myseo } from "../../data/SEO/contact";
import LayoutFour from "../../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  CardTitle,
  CardText,
} from "reactstrap";

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
//主程式部分
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

  const CustomToolbar = (toolbar) => {
    const goToDayView = () => toolbar.onView("day");

    const goToWeekView = () => toolbar.onView("week");

    const goToMonthView = () => toolbar.onView("month");

    const goToBack = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() - 1);
      toolbar.onNavigate("pre");
    };

    const goToNext = () => {
      toolbar.date.setMonth(toolbar.date.getMonth() + 1);
      toolbar.onNavigate("next");
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate("current");
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span>
          <b>{date.format("MMMM")}</b>
          <span> {date.format("YYYY")}</span>
        </span>
      );
    };

    return (
      <div className="d-flex justify-content-between align-items-center p-3 flex-column flex-sm-row">
        <div>
          <h3 className="mb-0">{label()}</h3>
        </div>
        <div>
          <ButtonGroup className="button-shadow">
            {/* <Button outline color="secondary" onClick={goToDayView}>
              日
            </Button>
            <Button outline color="secondary" onClick={goToWeekView}>
              週
            </Button> */}
            {/* <Button outline color="secondary" onClick={goToMonthView}>
              月
            </Button> */}
          </ButtonGroup>
        </div>
        <div>
          <ButtonGroup className="button-shadow">
            <Button outline color="secondary" onClick={goToBack}>
              上月
            </Button>
            <Button outline color="secondary" onClick={goToCurrent}>
              今天
            </Button>
            <Button outline color="secondary" onClick={goToNext}>
              次月
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fiule">
      <Row>
        <Col>
          <LayoutFour myseo={myseo}>
            <Breadcrumb title="我的日曆">
              <BreadcrumbItem name="Home" />
              <BreadcrumbItem name="我的日曆" current />
            </Breadcrumb>
            <div className="row">
              <div className="col-3">
                <Card body outline color="secondary">
                  <CardTitle tag="h3">我的訂單</CardTitle>
                  <CardText>
                    <ul>
                      <li>210009028939</li>
                      <li>210009028923</li>
                      <li>210009028914</li>
                      <li>210009028909</li>
                    </ul>
                  </CardText>
                  <Button>編輯</Button>
                </Card>
              </div>
              <div className="col-8">
                <Card className="app-calendar">
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
                    components={{
                      toolbar: CustomToolbar,
                    }}
                  />
                </Card>
              </div>
            </div>
          </LayoutFour>
        </Col>
      </Row>
    </div>
  );
};
export default MyCalendar;
