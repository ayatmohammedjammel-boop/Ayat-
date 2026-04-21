// EnhancedJordanGovernmentSystem.js

// Toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Functionality Implementation
function fetchGovernmentData() {
    // Placeholder function for fetching government data
    console.log("Fetch government data here...");
}

// Initialize the application
function init() {
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton.addEventListener('click', toggleDarkMode);
    fetchGovernmentData();
}

// Main entry point
document.addEventListener('DOMContentLoaded', init);
