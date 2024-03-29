import React from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts").then((mod) => mod.default), {
  ssr: false
});
// import "./dashboard.scss";

import getChartColorsArray from "../../Components/Common/ChartDynamicColor";

const ApexRadial = ({ dataColors }: any) => {
  const apexRadialChartColors = getChartColorsArray(dataColors);

  const series = [67];

  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "13px",
            color: void 0,
            offsetY: 60,
          },
          value: {
            offsetY: 22,
            fontSize: "16px",
            color: void 0,
            formatter: function (e: any) {
              return e + "%";
            },
          },
        },
      },
    },
    colors: apexRadialChartColors,
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: !1,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Series A"],
  };
  return (
    typeof window !== "undefined" && (
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="200"
        className="apex-charts"
      />
    )
  );
};

export default ApexRadial;
