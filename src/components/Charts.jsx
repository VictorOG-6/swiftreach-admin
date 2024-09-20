import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { lineChartData } from '../data/dummy';

const Charts = () => {
  return (
    <LineChart
    width={700}
    height={220}
    data={lineChartData}
    margin={{ top: -20, right: 30, left: 0, bottom: 5 }}
    className='bg-white p-2 rounded-3xl'
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date">
      <Label value="Date" offset={-20} position="insideBottom" />
    </XAxis>
    <YAxis>
      <Label  angle={-90} position="insideLeft" />
    </YAxis>
    <Tooltip />
    <Legend verticalAlign="top" align='right' height={36} wrapperStyle={{ position: 'relative', top: -235, right: -20, fontWeight: 'bold', fontSize: '0.9em'}}/>
    <Line type="monotone" dataKey="line3" stroke="#ffc658" name="Created" />
    <Line type="monotone" dataKey="line1" stroke="#8884d8" name="Derived" />
    <Line type="monotone" dataKey="line2" stroke="#82ca9d" name="Successful" />
  </LineChart>
  )
}

export default Charts