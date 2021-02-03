import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import result from "./Data/GET_user_course_details.json";

function UserCoursesDetails() {
  const [data, setData] = useState(undefined);
  let labels = [];
  let avg_time = [];
  let score = [];
  // fetch("./Data/GET_user_course_details.json")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((result) => {
  for (let i in result.data) {
    labels.push(result.data[i].title);
    avg_time.push(result.data[i].avg_time);
    score.push(result.data[i].score);
  }
  if (data === undefined) {
    setData({
      labels: labels,
      datasets: [
        {
          label: "Average Time",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,0.2)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255,99,132,1)",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: avg_time
        },
        {
          label: "Score",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "#cc6fed",
          borderColor: "#cc6fed",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#ac0be6",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#ac0be6",
          pointHoverBorderColor: "#ac0be6",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: score
        }
      ]
    });
  }
  // });

  return (
    <div>
      <Line
        data={data === undefined ? {} : data}
        options={{
          title: {
            display: true,
            text: "Particular Course Details"
          },
          scales: {
            xAxes: [
              {
                display: false //this will remove all the x-axis grid lines
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default UserCoursesDetails;
