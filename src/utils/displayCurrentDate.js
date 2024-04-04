export function displayCurrentDateTime() {
    // Create a new Date object
    var currentDateTime = new Date();

    // Extract date components
    var date = currentDateTime.toLocaleDateString();
    
    // Extract time components
    var time = currentDateTime.toLocaleTimeString();

    // Display the date and time
    // console.log("Current Date: " + date);
    // console.log("Current Time: " + time);

    return `${date}, ${time}`;
}

// Call the function to display current date and time
// displayCurrentDateTime();
