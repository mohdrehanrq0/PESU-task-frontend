import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const HabitProgressChart = ({
  label,
  dataPoint,
}: {
  label: string[];
  dataPoint: number[];
}) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Habit Completion Rate (%)",
        data: dataPoint,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4CAF50",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div
      className="bg-bg-200 w-full h-auto"
      style={{
        padding: "20px",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default HabitProgressChart;
