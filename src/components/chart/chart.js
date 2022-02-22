import ChartBar from "./chartBar";
import './chart.css';

function Chart(params) {

  let maxValue = Math.max(...(params.chartDataValues.map(chartData => chartData.value)));

  return (
    <div className="chart">
      {params.chartDataValues.map(chartData => (
        <ChartBar
          key={chartData.label}
          value={chartData.value}
          maxValue={maxValue}
          label={chartData.label}
        />
      ))}
    </div>
  );
};

export default Chart;