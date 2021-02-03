import React from "react";
import UserCourses from "./Charts/GET_get_user_courses";
import UserCoursesDetails from "./Charts/GET_user_course_details";
import UserCoursesTimelineAvgTime from "./Charts/GET_user_courses_timeline_tim";
import UserCoursesTimelineScore from "./Charts/GET_user_courses_timeline_scr";
function App() {
  return (
    <div className="App">
      <UserCoursesTimelineAvgTime />
      <br />
      <UserCoursesTimelineScore />
      <br />
      <UserCoursesDetails />
      <br />
      <UserCourses />
      <br />
    </div>
  );
}
export default App;
