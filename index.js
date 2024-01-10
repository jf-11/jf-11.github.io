document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent;
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        document.body.style.webkitTextStroke = "thin";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox");
    const body = document.body;
    const moonIcon = document.getElementById("moon-icon");
    const sunIcon = document.getElementById("sun-icon");

    // Retrieve saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');

    // Initialize checkbox and icons based on saved or default theme
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
        checkbox.checked = (savedTheme === "light");
    } else {
        // Set default theme to light
        body.setAttribute("data-theme", "light");
        checkbox.checked = true;
    }

    if (body.getAttribute("data-theme") === "light") {
        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
    } else {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
    }

    // Listen for checkbox changes
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            body.setAttribute("data-theme", "light");
            localStorage.setItem('theme', 'light'); // Save theme to localStorage
            moonIcon.style.display = "inline";
            sunIcon.style.display = "none";
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem('theme', 'dark'); // Save theme to localStorage
            moonIcon.style.display = "none";
            sunIcon.style.display = "inline";
        }
    });
});
