import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const RiskBox = ({ title, subtitle, value, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between" pb={1}>
        {/*Icon Box*/}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" mt="2px" alignItems="center">
        {/*{icon && <Box mr={2}>{icon}</Box>} {/* Add margin to the icon */}
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
        </Typography>
        <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
        >
            {/*increase*/}
        </Typography>
        </Box>

        <Box backgroundColor={colors[400]} p={2} position="relative">
            <Typography
                variant="h1"
                sx={{
                color: colors.greenAccent[500],
                position: "absolute",
                top: 0,
                right: 0,
                marginRight: "50px",
                marginTop: "-50px",
                }}
            >
                {value}
                
            </Typography>
        </Box>
    </Box>
  );
};

export default RiskBox;