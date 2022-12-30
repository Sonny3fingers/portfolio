import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { HardSkillsData } from "../HardSkillsData";
import styles from "./DoughnutChart.module.css";

const DoughnutChart = () => {
  let dataArr = [];
  HardSkillsData.forEach((item) => {
    const data = {
      id: item.id,
      labels: [item.skill],
      datasets: [
        {
          data: [item.level, item.remains],
          backgroundColor: [item.colorLevel, item.colorRemains],
        },
      ],
    };
    dataArr.push(data);
  });
  const [skillsDataArr, setskillsDataArr] = useState(dataArr);
  return (
    <div className={styles.chartContainer}>
      {skillsDataArr.map((item) => (
        <div key={item.id} className={styles.chart}>
          <Doughnut
            data={{
              labels: item.labels,
              datasets: item.datasets,
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              aspectRatio: 1,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;
