import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import result from "./Data/GET_user_courses_timeline.json";

function UserCoursesTimelineAvgTime() {
  const [data, setData] = useState(undefined);
  let labels = [];
  let titles = [];
  let avg_time = [];
  // fetch("./Data/GET_user_courses_timeline.json")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((result) => {
  for (let i in result) {
    labels.push(i);
  }
  for (let i in result[labels[0]]) {
    titles.push(result[labels[0]][i]["title"]);
  }
  for (let i in result[labels[0]]) {
    let temp = [];
    for (let j in result) {
      temp.push(result[j][i]["avg_time"]);
    }
    avg_time.push(temp);
  }
  let datasets = [];
  for (let i in titles) {
    datasets.push({
      label: titles[i],
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(" + 16 * (i + 1) + ",35,156,0.2)",
      borderColor: "rgba(" + 16 * (i + 1) + ",35,156,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(" + 16 * (i + 1) + ",35,156,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(" + 16 * (i + 1) + ",35,156,1)",
      pointHoverBorderColor: "rgba(" + 16 * (i + 1) + ",35,156,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 2,
      pointHitRadius: 10,
      data: avg_time[i]
    });
  }

  if (data === undefined) {
    setData({
      labels: labels,
      datasets: datasets
    });
  }
  // });

  return (
    <div>
      <Radar
        data={data === undefined ? {} : data}
        options={{
          title: {
            display: true,
            text: "Average Time"
          }
        }}
      />
    </div>
  );
}
export default UserCoursesTimelineAvgTime;
