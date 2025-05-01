"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);


function OverallExpense() {
    const data = {
        labels: ['Salaries', 'Equipment & Machinery', 'Rent & Utilities' , 'Transportation'],
        datasets: [
          {
            label: 'AED',
            data: [4400000, 2400000, 1400000, 700000],
            backgroundColor: ['#00A653', '#3B82F6', '#00C2FF' , '#CB3CFF'],
            borderWidth: 0,
          },
        ],
      };
    
      const options = {
        cutout: '70%', // Adjust to control the size of the donut hole
        responsive: true,
        
        plugins: {
            tooltip: {
                align: 'center', 
                enabled: true,
                backgroundColor: '#0d0d0deb', // Dark gray
                titleColor: '#BBBBBB',      // Light text for title
                bodyColor: '#fff',       // Light text for body
                padding: 10,
                cornerRadius: 10,
                borderColor: '#c2c2c217',
                borderWidth: .5,
                displayColors: false,       // Hide color box in tooltip
                
              },
            legend: {
                display: true,            // Show/hide the legend
                position: 'bottom',       // 'top', 'left', 'bottom', 'right'
                align: 'start',          // 'start', 'center', 'end'
                labels: {
                  color: '#333',          // Font color
                  font: {
                    size: 12,             // Font size
                    family: 'Arial',      // Font family
                    weight: 'bold',       // 'normal', 'bold', etc.
                  },
                  boxWidth: 5,         // Decrease the width of the color box
                  boxHeight: 5,        // Width of the color box
                  padding: 10 ,            // Padding between legend items
                  usePointStyle: true,    // Use circle instead of square
                  pointStyle: 'circle',   // 'circle', 'rect', 'line', etc.
                }
              }
        },
      }; 
  return (
    <div className="p-4 rounded-[10px] bg-[#d9d9d903] border border-[#ffffff1a]">
    <h2 className="font-semibold text-[14px] mb-8">Overall Expense Status</h2>
    <div className='flex '>
        <div className='relative'>
            <div className='flex w-full justify-center items-center flex-col h-[80%] z-[-1] absolute'>
                <h4 className=''>Total Expenses</h4>
                <p className='text-[24px] font-semibold'>136,245,140</p>
            </div>
        <Doughnut data={data} options={options} />
        </div>
        <div className='border-l border-[#ffffff1a] px-4 w-full pt-6'>
            <div className='mb-3'>
                <div className='flex items-center gap-2  '>
                    <h6 className='text-[15px] text-[#FFFFFF80]'>Salary</h6>
                    <span className='text-[15px] font-semibold'>AED 4,400,000</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='h-[14px] relative rounded-4xl p-[3px]  shrink-0 w-[94%] bg-[#f1f1f11a]'>
                        <div className='bg-[#00A653] h-full rounded-4xl w-[52%] '></div>
                    </div>
                    <h5 className='text-[15px]'>52%</h5>
                </div>
            </div>
            <div className='mb-3'>
                <div className='flex items-center gap-2  '>
                    <h6 className='text-[15px] text-[#FFFFFF80]'>Equipment & Machinery</h6>
                    <span className='text-[15px] font-semibold'>AED 52,245</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='h-[14px] relative rounded-4xl p-[3px]  shrink-0 w-[94%] bg-[#f1f1f11a]'>
                        <div className='bg-[#3B82F6] h-full rounded-4xl w-[25%] '></div>
                    </div>
                    <h5 className='text-[15px]'>25%</h5>
                </div>
            </div>
            <div className='mb-3'>
                <div className='flex items-center gap-2  '>
                    <h6 className='text-[15px] text-[#FFFFFF80]'>Rent & Utilities</h6>
                    <span className='text-[15px] font-semibold'>AED 52,245</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='h-[14px] relative rounded-4xl p-[3px]  shrink-0 w-[94%] bg-[#f1f1f11a]'>
                        <div className='bg-[#00C2FF] h-full rounded-4xl w-[18%] '></div>
                    </div>
                    <h5 className='text-[15px]'>18%</h5>
                </div>
            </div>
            <div className='mb-3'>
                <div className='flex items-center gap-2 '>
                    <h6 className='text-[15px] text-[#FFFFFF80]'>Transportation</h6>
                    <span className='text-[15px] font-semibold'>AED 52,245</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <div className='h-[14px] relative rounded-4xl p-[3px]  shrink-0 w-[94%] bg-[#f1f1f11a]'>
                        <div className='bg-[#C93CFC] h-full rounded-4xl w-[5%] '></div>
                    </div>
                    <h5 className='text-[15px]'>5%</h5>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default OverallExpense