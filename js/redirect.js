// Make a request to the ipapi API to get the user's IP address details
fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
        // Check if the country is not Syria
        if (data.country !== "SY") {
            // Redirect the user to another URL
            window.location.href = "http://palomasy.com";
        }
    });
