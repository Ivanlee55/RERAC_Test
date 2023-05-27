import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarDataHL as data } from "../data/riskmockdata";


const BarChartHL = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getColor = (risk) => {
    if (risk >= 0 && risk <= 4) {
      return "#33ac89 "; // GreenRisk
    } else if (risk >= 5 && risk <= 7) {
      return "#ffc43d"; // YellowRisk
    } else if (risk >= 8 && risk <= 10) {
      return "#ef476f"; // RedRisk
    }
    return colors.gray[500]; // Default color for undefined cases
  };

  const riskData = data.map((item) => ({
    ...item,
    color: getColor(item.Risk),
  }));

  return (
    <ResponsiveBar
      data={riskData}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["Risk"]}
      indexBy="location"
      margin={{ top: 25, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear", min: 0, max: 10 }}
      indexScale={{ type: "band", round: true }}
      colors={({ data }) => data.color} // Use the 'color' property from riskData
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Location", // x axis
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Risk Value", // y axis
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in location: ${e.indexValue}`
      }
    />
  );
};

export default BarChartHL;
