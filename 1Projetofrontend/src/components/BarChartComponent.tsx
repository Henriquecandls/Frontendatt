import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

interface ChartData {
  name: string;
  questions: number;
  answers: number;
}

interface BarChartComponentProps {
  data: ChartData[];
}

function BarChartComponent({ data }: BarChartComponentProps) {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="questions" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="answers" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
      <RechartsDevtools />
    </BarChart>
  );
}

export default BarChartComponent;
