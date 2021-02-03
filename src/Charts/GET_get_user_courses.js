import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import result from "./Data/GET_get_user_courses.json";

function UserCourses() {
  const [data, setData] = useState(undefined);

  // Uncomment to fetch Api Data

  // let labels = [];
  // let avg_time = [];
  // let score = [];
  // fetch("./Data/GET_get_user_courses.json")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     for (let i in data.data) {
  //       labels.push(data.data[i].title);
  //       avg_time.push(data.data[i].avg_time);
  //       score.push(data.data[i].score);
  //     }
  //     if (data.labels === undefined) {
  //       setData({
  //         labels: labels,
  //         datasets: [
  //           {
  //             label: "Average Time",
  //             backgroundColor: "rgba(255,99,132,0.2)",
  //             borderColor: "rgba(255,99,132,1)",
  //             borderWidth: 1,
  //             hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //             hoverBorderColor: "rgba(255,99,132,1)",
  //             data: avg_time
  //           },
  //           {
  //             label: "Score",
  //             backgroundColor: "rgba(255,99,132,1)",
  //             borderColor: "rgba(255,99,132,2)",
  //             borderWidth: 1,
  //             hoverBackgroundColor: "rgba(255,99,132,2)",
  //             hoverBorderColor: "rgba(255,99,132,1)",
  //             data: score
  //           }
  //         ]
  //       });
  //     }
  //   });

  // Comment to fetch Api Data
  let labels = [];
  let avg_time = [];
  let score = [];
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
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: avg_time
        },
        {
          label: "Score",
          backgroundColor: "rgba(255,99,132,1)",
          borderColor: "rgba(255,99,132,2)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,2)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: score
        }
      ]
    });
  }

  return (
    <div>
      <Bar
        data={data === undefined ? {} : data}
        width={100}
        height={50}
        options={{
          title: {
            display: true,
            text: "Course Details"
          }
        }}
      />
    </div>
  );
}
export default UserCourses;
