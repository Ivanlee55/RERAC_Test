import { Box, Button, Hidden, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useNavigate } from "react-router-dom";

import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";

import BarChart from "../../components/BarChart";
import BarChartHL from "../../components/BarChartHL";
import BarChartNum from "../../components/BarChartnum";

import StatBox from "../../components/StatBox";
import DataBox from "../../components/DataBox";
import RiskBox from "../../components/RiskBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BLK 8 DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/*Button 0: Total overview */}
          <Button onClick={() => navigate(-1)}
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 5px",
                marginRight: "10px"
            }}
            >
            Total Risks
          </Button>

          {/*Button 1: Blk 8 */}
          <Button onClick={() => navigate()}
            sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 5px",
                marginRight: "10px"
            }}
            >
            Blk 8
          </Button>

          {/*Button 2: Blk 23 */}
                <Button onClick={() => navigate("blk23")}
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 5px",
                    marginRight: "10px"
                }}
                >
                Blk 23
                </Button>

          {/*Button 3: Blk 51 */}
                <Button onClick={() => navigate("blk51")}
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 5px",
                    marginRight: "10px"
                }}
                >
                Blk 51
                </Button>

          {/*Button 4: Blk 72 */}
                <Button onClick={() => navigate("blk72")}
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 5px",
                    marginRight: "10px"
                }}
                >
                Blk 72
                </Button>

          {/*Button 5: Blk 73 */}
                <Button onClick={() => navigate("blk73")}
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 5px",
                    marginRight: "10px",
                }}
                >
                Blk 73
                </Button>

          {/*Button 6: Blk SIT */}
                <Button onClick={() => navigate("blkSIT")}
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 5px"
                }}
                >
                Blk SIT
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
        {/* ROW 1 - 2 Graph*/}
        {/* ROW 1.1 - 1 Graph*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Risks Per Area
          </Typography>
          <Box height="260px" mt="0px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 1.2 - 1 Graph*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Risks Per Area
          </Typography>
          <Box height="260px" mt="0px">
            <BarChartHL isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2.1 - 1 Graph*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Risks Per Area
          </Typography>
          <Box height="260px" mt="0px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2.2 - 1 Graph*/}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Risks Per Area
          </Typography>
          <Box height="260px" mt="0px">
            <BarChartNum isDashboard={true} />
          </Box>
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
            title="12,361"
            subtitle="Emails Sent"
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
            subtitle="Sales Obtained"
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
            subtitle="New Clients"
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
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;