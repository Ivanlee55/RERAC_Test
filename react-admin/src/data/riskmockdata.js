import { tokens } from "../theme";

// Import the value of blk8 from onlinejson.js;
import { intBlk8 } from "../backend/onlinejson";

const blk123 = 9;

//Actual mockdata now 
export const mockBarData = [
  {
    location: "Blk 8",
    RedRisk: 18,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 17,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 25,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
  {
    location: "Blk 23",
    RedRisk: 10,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 25,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 25,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
  {
    location: "Blk 51",
    RedRisk: 5,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 5,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 50,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
  {
    location: "Blk 72",
    RedRisk: 2,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 3,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 55,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
  {
    location: "Blk 73",
    RedRisk: 15,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 25,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 20,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
  {
    location: "Blk SIT",
    RedRisk: 2,
    RedRiskColor: "hsl(355, 94%, 70%)",
    YellowRisk: 4,
    YellowRiskColor: "hsl(49, 90%, 64%)",
    GreenRisk: 54,
    GreenRiskColor: "hsl(175, 100%, 39%)",
  },
];

//HIGH LOW
export const mockBarDataHL = [
  {
    location: "Blk 8",
    Risk: 8, //value to be passed in from mySQL
    RiskColor: "hsl(355, 94%, 70%)",
  },
  {
    location: "Blk 23",
    Risk: 5,
    RiskColor: "hsl(355, 94%, 70%)",
  },
  {
    location: "Blk 51",
    Risk: 2,
    RiskColor: "hsl(355, 94%, 70%)",
  },
  {
    location: "Blk 72",
    Risk: 2,
    RiskColor: "hsl(355, 94%, 70%)",
  },
  {
    location: "Blk 73",
    Risk: 9,
    RiskColor: "hsl(355, 94%, 70%)",
  },
  {
    location: "Blk SIT",
    Risk: 6,
    RiskColor: "hsl(355, 94%, 70%)",
  },
];

export const mockLineData = [
  {
    id: "Blk 8",
    color: "#f04770",
    data: [
      {
        x: "7am",
        y: 1,
      },
      {
        x: "8am",
        y: 5,
      },
      {
        x: "9am",
        y: 6,
      },
      {
        x: "10am",
        y: 6,
      },
      {
        x: "11am",
        y: 5,
      },
      {
        x: "12am",
        y: 6,
      },
      {
        x: "1pm",
        y: 8,
      },
      {
        x: "2pm",
        y: 2,
      },
      {
        x: "3pm",
        y: 8,
      },
      {
        x: "4pm",
        y: 1,
      },
      {
        x: "5pm",
        y: 5,
      },
      {
        x: "6pm",
        y: 4,
      },
    ],
  },
  {
    id: "Blk 23",
    color: "#f88c6c",
    data: [
      {
        x: "7am",
        y: 3,
      },
      {
        x: "8am",
        y: 4,
      },
      {
        x: "9am",
        y: 6,
      },
      {
        x: "10am",
        y: 7,
      },
      {
        x: "11am",
        y: 5,
      },
      {
        x: "12am",
        y: 10,
      },
      {
        x: "1pm",
        y: 8,
      },
      {
        x: "2pm",
        y: 2,
      },
      {
        x: "3pm",
        y: 4,
      },
      {
        x: "4pm",
        y: 4,
      },
      {
        x: "5pm",
        y: 3,
      },
      {
        x: "6pm",
        y: 5,
      },
    ],
  },
  {
    id: "Blk 51",
    color: "#83d484",
    data: [
      {
        x: "7am",
        y: 3,
      },
      {
        x: "8am",
        y: 4,
      },
      {
        x: "9am",
        y: 6,
      },
      {
        x: "10am",
        y: 7,
      },
      {
        x: "11am",
        y: 5,
      },
      {
        x: "12am",
        y: 10,
      },
      {
        x: "1pm",
        y: 8,
      },
      {
        x: "2pm",
        y: 2,
      },
      {
        x: "3pm",
        y: 4,
      },
      {
        x: "4pm",
        y: 4,
      },
      {
        x: "5pm",
        y: 3,
      },
      {
        x: "6pm",
        y: 5,
      },
    ],
  },
  {
    id: "Blk 72",
    color: "#06d7a0",
    data: [
      {
        x: "7am",
        y: 1,
      },
      {
        x: "8am",
        y: 2,
      },
      {
        x: "9am",
        y: 3,
      },
      {
        x: "10am",
        y: 4,
      },
      {
        x: "11am",
        y: 5,
      },
      {
        x: "12am",
        y: 6,
      },
      {
        x: "1pm",
        y: 7,
      },
      {
        x: "2pm",
        y: 8,
      },
      {
        x: "3pm",
        y: 9,
      },
      {
        x: "4pm",
        y: 2,
      },
      {
        x: "5pm",
        y: 3,
      },
      {
        x: "6pm",
        y: 4,
      },
    ],
  },
  {
    id: "Blk 73",
    color: "#108ab1",
    data: [
      {
        x: "7am",
        y: 6,
      },
      {
        x: "8am",
        y: 5,
      },
      {
        x: "9am",
        y: 7,
      },
      {
        x: "10am",
        y: 8,
      },
      {
        x: "11am",
        y: 5,
      },
      {
        x: "12am",
        y: 6,
      },
      {
        x: "1pm",
        y: 8,
      },
      {
        x: "2pm",
        y: 9,
      },
      {
        x: "3pm",
        y: 8,
      },
      {
        x: "4pm",
        y: 10,
      },
      {
        x: "5pm",
        y: 5,
      },
      {
        x: "6pm",
        y: 4,
      },
    ],
  },
  {
    id: "Blk SIT",
    color: "#ffd167",
    data: [
      {
        x: "7am",
        y: 3,
      },
      {
        x: "8am",
        y: 5,
      },
      {
        x: "9am",
        y: 7,
      },
      {
        x: "10am",
        y: 8,
      },
      {
        x: "11am",
        y: 10,
      },
      {
        x: "12am",
        y: 1,
      },
      {
        x: "1pm",
        y: 2,
      },
      {
        x: "2pm",
        y: 2,
      },
      {
        x: "3pm",
        y: 3,
      },
      {
        x: "4pm",
        y: 4,
      },
      {
        x: "5pm",
        y: 5,
      },
      {
        x: "6pm",
        y: 4,
      },
    ],
  },
];

//NPGeographyData
export const mockGeographyData = [
  {
    id: "NP",
    value: 10,
  },
];