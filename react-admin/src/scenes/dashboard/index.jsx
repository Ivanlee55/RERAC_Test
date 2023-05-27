import { Box, Button, Hidden, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import DataBox from "../../components/DataBox";
import RiskBox from "../../components/RiskBox";
import ProgressCircle from "../../components/ProgressCircle";

//import GeographyNP from "../../components/GeographyNP";

//import Map from "../../scenes/map";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="RERAC DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="15px"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h4" fontWeight="600" sx={{ marginBottom: "5px" }}>
            NP RISK MAP
          </Typography>
          <Box flex="2" minHeight="0">
            <GeographyNP isDashboard={true} style={{ height: "100%", width: "100%" }} />
          </Box>
        </Box> */}

        {/* Graph 3.3: Geography Based Traffic - Geography map*/}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="15px"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h4" fontWeight="600" sx={{ marginBottom: "5px" }}>
            NP RISK MAP
          </Typography>
          <Box flex="2" minHeight="0">
            <GeographyChart isDashboard={true} style={{ height: "100%", width: "100%" }} />
          </Box>
        </Box>

        {/* Box 1.2 - datetime */}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DataBox
            title= "Date and Time"
            subtitle={new Date().toLocaleString()} // Use the desired date format
          />
        </Box>

        {/* Box 2.1- Current Risk*/}
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <RiskBox
            title="Current risk value" //Must make this dynamic
            subtitle="last updated xxxx pm"
            increase="+14%" //Make this dynamic
            value = "10"
            icon={
              <ReportProblemRoundedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "28px" }}
              />
            }
          />
        </Box>

        {/* ROW 1 - 4 boxes*/}

        {/* 1. Create a box */}
        {/* 2. Create data in the box */}

        {/* Box 1.1- Emails sent*/}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2,361"
            subtitle="Total Risks"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Box 1.2- Sales Obtained*/}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Average Risk"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Box 1.3- New Clients*/}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Green Zones"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Box 1.4- Traffic recieved*/}
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Red Zones"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 - 1 Graph, 1 Log*/}

        {/* ROW 2.1 - 1 Graph*/}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Risks Per Area
          </Typography>
          <Box height="400px" mt="10px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2.2 1 Log*/}
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Risks
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;