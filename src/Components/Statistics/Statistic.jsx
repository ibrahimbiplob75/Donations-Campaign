import React from 'react';
import  { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Bar, Rectangle } from "recharts";



const Statistic = () => {
    const total_donate = localStorage.getItem("Donate_length");
    const remain_donate = 12 - total_donate;
    // console.log(total_donate,remain_donate);
    const data = [
      { name: "Group A", value: total_donate*100 },
      { name: "Group B", value: remain_donate*100 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };


    return (
      <div className='w-1/2 max-h-screen m-auto'>
        <PieChart width={700} height={700}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Bar
          dataKey="value"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="value"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </div>
    );
    
};

export default Statistic;