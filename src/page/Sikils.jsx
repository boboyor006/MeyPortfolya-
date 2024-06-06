import React from 'react'
import  "../css/sikils.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis as RechartsXAxis } from 'recharts';



const Sikils = () => {


const data = [
  {name: 'Jan', uv: 400, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 300, pv: 1398, amt: 2210},
  {name: 'Mar', uv: 200, pv: 9800, amt: 2290},
  {name: 'Apr', uv: 278, pv: 3908, amt: 2000},
  {name: 'May', uv: 189, pv: 4800, amt: 2181},
  {name: 'Jun', uv: 239, pv: 3800, amt: 2500},
  {name: 'Jul', uv: 349, pv: 4300, amt: 2100},
];


const datas = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

  

  return (
    <div className='Sikils'>
          <LineChart  className='charts' width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart >
    <BarChart width={600} height={300} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
     <RechartsXAxis dataKey="name" />
     <YAxis />
     <CartesianGrid strokeDasharray="3 3" />
     <Tooltip />
     <Legend />
     <Bar dataKey="pv"  fill="#8884d8" />
     <Bar dataKey="uv"  fill="#82ca9d" />
    </BarChart>
    </div>
    
  )
}

export default Sikils
