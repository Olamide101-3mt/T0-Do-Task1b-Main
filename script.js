function updateEpochTime() {
    const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
    // Date.now() provides the time in milliseconds
    timeDisplay.textContent = Date.now();
}

// Update the time immediately on load
updateEpochTime();

// Set interval to update every 100ms for a "live" clock effect
setInterval(updateEpochTime, 100);