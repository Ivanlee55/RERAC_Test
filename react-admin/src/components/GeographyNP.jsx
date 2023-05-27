// import React, { Component } from "react";
// import { Map, GeoJSON } from "react-leaflet";
// import mapData from "./../data/mockGeoNP";
// import "leaflet/dist/leaflet.css";
// import "./GeographyNP.css";

// class GeographyNP extends Component {
//   state = { color: "#ffff00" };

//   colors = ["green", "blue", "yellow", "orange", "grey"];

//   componentDidMount() {
//     console.log(mapData);
//   }

//   boundaryStyle = {
//     fillColor: "red",
//     fillOpacity: 1,
//     color: "black",
//     weight: 2,
//   };

//   printMesssageToConsole = (event) => {
//     console.log("Clicked");
//   };

//   changeboundaryColor = (event) => {
//     event.target.setStyle({
//       color: "green",
//       fillColor: this.state.color,
//       fillOpacity: 1,
//     });
//   };

//   onEachboundary = (boundary, layer) => {
//     const boundaryName = <boundary className="properties name"></boundary>;
//     console.log(boundaryName);
//     layer.bindPopup(boundaryName);

//     layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
//     // const colorIndex = Math.floor(Math.random() * this.colors.length);
//     // layer.options.fillColor = this.colors[colorIndex]; //0

//     layer.on({
//       click: this.changeboundaryColor,
//     });
//   };

//   colorChange = (event) => {
//     this.setState({ color: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h1 style={{ textAlign: "center" }}>My Map</h1>
//         <Map style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
//           <GeoJSON
//             style={this.boundaryStyle}
//             data={mapData.features}
//             onEachFeature={this.onEachboundary}
//           />
//         </Map>
//         <input
//           type="color"
//           value={this.state.color}
//           onChange={this.colorChange}
//         />
//       </div>
//     );
//   }
// }

// export default GeographyNP;