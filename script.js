document.addEventListener('DOMContentLoaded', function() {
    // Select elements using document.getElementById()
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Event listener for the change-color-btn
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of the color-box to a random color
        colorBox.style.backgroundColor = getRandomColor();
    });
});
