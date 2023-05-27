import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { useLoadScript } from '@react-google-maps/api';
import Header from "../../components/Header";
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapsApiKey = 'AIzaSyC6-ebDRgPm7HgZIXFT_j9GvyG1igoekm8';

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapsApiKey,
  });

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Box m="20px">
      <Header title="NP RiskMap" subtitle="Map" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
      </Box>
    </Box>
  );
};

function Maps() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;
