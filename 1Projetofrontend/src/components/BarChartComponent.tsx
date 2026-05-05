interface BarChartComponent {
  data: ChartData[];
  xKey: string;
  yKey: string;
}

function BartChartComponent({ data }: BarChartComponent) {
  return (
    <>
      <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
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

        {/* PERGUNTAS */}
        <Bar
          dataKey="questions"
          fill="#8884d8"
          activeBar={{ fill: 'pink', stroke: 'blue' }}
          radius={[10, 10, 0, 0]}
        />

        {/* RESPOSTAS */}
        <Bar
          dataKey="answers"
          fill="#82ca9d"
          activeBar={{ fill: 'gold', stroke: 'purple' }}
          radius={[10, 10, 0, 0]}
        />

        <RechartsDevtools />
      </BarChart>
    </>
  );
}

export default BartChartComponent;