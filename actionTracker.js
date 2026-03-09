// actionTracker.js

// Function to track user interactions
function trackUserInteraction(eventName, details) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Event: ${eventName}, Details: ${JSON.stringify(details)}`);
}

// Example usage
trackUserInteraction('click', { elementId: 'submit-button', value: 'Submit' });

export default trackUserInteraction;