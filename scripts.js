// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Change Custom Color" button
    document.getElementById("change-custom-color").addEventListener("click", function() {
        // Prompt the user to enter a number between 0 and 100
        var userInput = prompt("Enter a number between 0 and 100:");
        var color = "";
        // Determine the color based on the user's input
        if (userInput < 0 || userInput > 100) {
            color = "red";
        } else if (userInput >= 0 && userInput <= 20) {
            color = "green";
        } else if (userInput > 20 && userInput <= 40) {
            color = "blue";
        } else if (userInput > 40 && userInput <= 60) {
            color = "orange";
        } else if (userInput > 60 && userInput <= 80) {
            color = "purple";
        } else if (userInput > 80 && userInput <= 100) {
            color = "yellow";
        }
        // Change the background color of the page
        document.body.style.backgroundColor = color;
    });

    // Event listener for the "Change Random Color" button
    document.getElementById("change-random-color").addEventListener("click", function() {
        // Generate a random number between 1 and 100
        var randomInput = Math.floor(Math.random() * 100) + 1;
        var color = "";
        // Determine the color based on the random number
        if (randomInput < 0 || randomInput > 100) {
            color = "red";
        } else if (randomInput >= 0 && randomInput <= 20) {
            color = "green";
        } else if (randomInput > 20 && randomInput <= 40) {
            color = "blue";
        } else if (randomInput > 40 && randomInput <= 60) {
            color = "orange";
        } else if (randomInput > 60 && randomInput <= 80) {
            color = "purple";
        } else if (randomInput > 80 && randomInput <= 100) {
            color = "yellow";
        }
        // Change the background color of the page
        document.body.style.backgroundColor = color;
    });

    // Event listener for the "image-select" dropdown
    document.getElementById("image-select").addEventListener("change", function() {
        var imageSrc = "";
        // Switch statement to determine the image source based on the selected value
        switch(this.value) {
            case "1":
                imageSrc = "img/img1.jpg";
                break;
            case "2":
                imageSrc = "img/img2.jpg";
                break;
            case "3":
                imageSrc = "img/img3.jpg";
                break;
            default:
                imageSrc = "img/img4.jpg"; // Default image source if none of the cases match
        }
        // Set the src attribute of the display-image element to the selected image source
        document.getElementById("display-image").src = imageSrc;
    });
});
