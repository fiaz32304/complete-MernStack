// Simple demo: Random number + basic if/else (even or odd)

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded. Ready to generate random numbers.');
    document.getElementById('generate').addEventListener('click', function () {
        const min = parseInt(document.getElementById('min').value, 10);
        const max = parseInt(document.getElementById('max').value, 10);
        console.log('Button clicked. Min:', min, 'Max:', max);

        // Basic validation using if/else structure
        if (Number.isNaN(min) || Number.isNaN(max)) {
            document.getElementById('result').textContent = 'Please enter valid numbers.';
            console.log('Invalid input. Please enter valid numbers.');
        } else if (min > max) {
            document.getElementById('result').textContent = 'Min should be less than or equal to Max.';
            console.log('Validation failed: min > max');
        } else {
            // Generate a random integer between min and max (inclusive)
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log('Generated random number:', random);

            // Simple if/else: check even or odd
            if (random % 2 === 0) {
                document.getElementById('result').textContent = 'Random number: ' + random + ' (even)';
                console.log('Branch: even');
            } else {
                document.getElementById('result').textContent = 'Random number: ' + random + ' (odd)';
                console.log('Branch: odd');
            }
        }
    });
});

