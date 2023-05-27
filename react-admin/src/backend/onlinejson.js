fetch('http://localhost:3000/data') // Replace the URL with the appropriate endpoint to fetch the JSON data
  .then(response => response.json())
  .then(data => {
    // Extract the values from the JSON data
    const { datetime, blk8, blk23, blk51, blk72, blk73, blkSIT, avgrisk } = data;

    // Split the datetime into date and time
    const [date, time] = datetime.split('T');

    // Convert the required fields to the desired data types
    const intBlk8 = parseInt(blk8);
    // const intBlk23 = parseInt(blk23);
    // const intBlk51 = parseInt(blk51);
    // const intBlk72 = parseInt(blk72);
    // const intBlk73 = parseInt(blk73);
    // const intBlkSIT = parseInt(blkSIT);
    // const floatAvgRisk = parseFloat(avgrisk);

    // Access the variables later in your code
    var output = {
      date: date,
      time: time,
      blk8: blk8,
      blk23: blk23,
      blk51: blk51,
      blk72: blk72,
      blk73: blk73,
      blkSIT: blkSIT,
      avgrisk: avgrisk
    };

    // Use the variables as needed in your JavaScript code
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



// Fetch the data from the API or local source

// import { mockBarDataHL } from "../data/riskmockdata";

// fetch('http://localhost:3000/data') // Replace the URL with the appropriate endpoint to fetch the JSON data
//   .then(response => response.json())
//   .then(data => {
//     // Extract the values from the JSON data
//     const { blk8, blk23 } = data;

//     // Update the mockBarDataHL array with the blk8 and blk23 values
//     updateMockBarDataHL(blk8, blk23);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


// // Function to update mockBarDataHL with the blk8 and blk23 values
// function updateMockBarDataHL(blk8, blk23) {
//   // Import the mockBarDataHL array from riskmockdata.js
  

//   // Find the objects with locations "Blk 8" and "Blk 23" in the array
//   const blk8Data = mockBarDataHL.find(item => item.location === "Blk 8");
//   const blk23Data = mockBarDataHL.find(item => item.location === "Blk 23");

//   // Update the Risk values with blk8 and blk23
//   if (blk8Data) {
//     blk8Data.Risk = blk8;
//   }
//   if (blk23Data) {
//     blk23Data.Risk = blk23;
//   }

//   // Export the updated mockBarDataHL array back to riskmockdata.js
  
// }
// export { mockBarDataHL };
