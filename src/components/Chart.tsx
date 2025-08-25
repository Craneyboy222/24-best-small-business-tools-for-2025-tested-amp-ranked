import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

type ChartProps = {
  data: any;
  options?: any;
};

const Chart: React.FC<ChartProps> = ({ data, options }) => {
  return (
    <div className="chart-container">
      <Line data={data} options={options} aria-label="Data chart" />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
};

export default Chart;