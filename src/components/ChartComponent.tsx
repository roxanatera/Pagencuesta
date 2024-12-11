import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface FormData {
  name: string;
  age: number;
  preference: string;
}

interface ChartComponentProps {
  data: FormData[];
}

export const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const counts = data.reduce((acc: Record<string, number>, curr) => {
    acc[curr.preference] = (acc[curr.preference] || 0) + 1;
    return acc;
  }, {});

  const labels = [
    'Las comidas y cenas especiales (A)',
    'Las reuniones con la familia y amigos (B)',
    'La decoración y el ambiente navideño (C)'
  ];
  const values = [
    counts['A'] || 0,
    counts['B'] || 0,
    counts['C'] || 0
  ];

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1, 
    plugins: {
      legend: {
        position: 'bottom' as const,
      }
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Pie data={chartData} options={options} />
    </div>
  );
};
