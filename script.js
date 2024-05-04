// Get references to the inverted text elements
const invertedElements = document.querySelectorAll('.inverted-2, .inverted-3, .inverted-4, .inverted-5, .inverted-6, .inverted-7, .inverted-8');

// Function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to set random positions and rotations for the inverted text elements
function setRandomPositionsAndRotations() {
    invertedElements.forEach(element => {
        // Generate random positions within the viewport
        const randomX = getRandomNumber(10, window.innerWidth - 100); // Adjust as needed
        const randomY = getRandomNumber(10, window.innerHeight - 100); // Adjust as needed

        // Generate random rotation degrees
        const randomRotation = getRandomNumber(0, 360);

        // Apply styles
        element.style.left = randomX + 'px';
        element.style.top = randomY + 'px';
        element.style.transform = `rotate(${randomRotation}deg)`;
    });
}

// Call the function to set random positions and rotations initially
setRandomPositionsAndRotations();

// Re-set positions and rotations when the window is resized
window.addEventListener('resize', setRandomPositionsAndRotations);
