import React from "react"
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts").then((mod) => mod.default), {
  ssr: false
});
import getChartColorsArray from "../../Components/Common/ChartDynamicColor";

const StackedColumnChart = ({ dataColors, periodData }: any) => {

  const stackedColumnChartColors = getChartColorsArray(dataColors);
  const options: any = {
    chart: {
      stacked: !0,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: !0
      }
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "15%"
      }
    },
    dataLabels: {
      enabled: !1
    },
    xaxis: {
      show: true,
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        show: true
      }
    },
    colors: stackedColumnChartColors,
    legend: {
      position: "bottom"
    },
    fill: {
      opacity: 1
    }
  }
  return (
    (typeof window !== 'undefined') &&
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="359"
        className="apex-charts"
      />
    </React.Fragment>
  );
}

export default StackedColumnChart;