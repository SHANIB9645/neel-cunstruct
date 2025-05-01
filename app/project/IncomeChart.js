"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
     
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      min: 0,
      max: 450000, 
    }, 
  },
  plugins: {
    title: {
      display: true, 
    },
    legend: {
        display: true,            // Show/hide the legend
        position: 'bottom',       // 'top', 'left', 'bottom', 'right'
        align: 'center',          // 'start', 'center', 'end'
        labels: {
          color: '#FFFFFFB2',          // Font color
          font: {
            size: 12,             // Font size 
            weight: 'normal',       // 'normal', 'bold', etc.
          },
          boxWidth: 10,         // Decrease the width of the color box
          boxHeight: 10,        // Width of the color box
          padding:30 ,            // Padding between legend items
          usePointStyle: true,    // Use circle instead of square
          pointStyle: 'rect',   // 'circle', 'rect', 'line', etc.
        }
      }
  }
};

const labels = ['Nov-23', 'Dec-23', 'jan-24', 'Feb-24', 'Mar-24', 'May-24', 'Jun-24', 'Jul-24', 'Aug-24', 'Nov-24', 'Sep-24', 'Oct-24'];

const data = {
  labels,
  datasets: [
    {
      label: 'Projected',
      data: [0, 0, 0, 25000, 75000, 90000, 125000, 250000, 150000, 250000, 300000],
      borderColor: '#00A653',
      backgroundColor: '#00A653',
      yAxisID: 'y',
    },
    {
      label: 'Actual',
      data: [0, 0, 0, 25000, 80000, 120000, 150000, 220000, 190000, 220000, 400000],
      borderColor: '#B41010',
      backgroundColor: '#B41010',
      yAxisID: 'y',
    },
  ],
};

function IncomeChart() {
  return (
    <div className='rounded-[10px] border border-[#ffffff1a]'>
        <div className='px-3 py-4 border-b border-[#ffffff1a] bg-[#d9d9d908]'>
            <h2 className='font-semibold text-[14px]'>Income vs expenditure</h2>
           
        </div>
        <div className="px-4 py-4">
            <Line options={options} data={data} />
            </div>
    </div>
  )
}

export default IncomeChart