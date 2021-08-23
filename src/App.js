import React from "react";
import {
  VictoryBar,
  VictoryLabel,
  VictoryChart,
  VictoryZoomContainer,
  VictoryScatter
} from "victory";

const PieChart = () => {
  return (
    <>
      <VictoryBar
        labels={({ datum }) => datum.x}
        labelComponent={<VictoryLabel dy={0} />}
        style={{ labels: { fill: "orange" } }}
        barRatio={1}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={[
          { y: 3653, x: "s" },
          { y: 3608, x: "p" },
          { y: 3583, x: "c" },
          { y: 3007, x: "a" },
          { y: 2323, x: "g" },
          { y: 2214, x: "m" },
          { y: 2024, x: "t" },
          { y: 1862, x: "b" },
          { y: 1525, x: "d" },
          { y: 1516, x: "h" },
          { y: 1464, x: "u" },
          { y: 1326, x: "r" },
          { y: 1259, x: "l" },
          { y: 1196, x: "e" },
          { y: 1180, x: "o" },
          { y: 1156, x: "f" },
          { y: 967, x: "n" },
          { y: 958, x: "i" },
          { y: 579, x: "w" },
          { y: 542, x: "v" },
          { y: 339, x: "k" },
          { y: 293, x: "j" },
          { y: 171, x: "z" },
          { y: 161, x: "q" },
          { y: 101, x: "y" },
          { y: 85, x: "x" }
        ]}
      />
      <VictoryChart
        domainPadding={{ y: 10 }}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryScatter y={(datum) => Math.sin(2 * Math.PI * datum.x)} />
      </VictoryChart>
    </>
  );
};

export default PieChart;
