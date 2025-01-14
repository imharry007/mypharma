
// document.addEventListener('DOMContentLoaded', function() {
//     const accordionButtons = document.querySelectorAll('.accordion-button');

//     accordionButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const accordionContent = this.nextElementSibling;

//             // Toggle the visibility of the accordion content
//             accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

//             // Optional: Add a class to animate the chevron rotation
//             this.querySelector('i').classList.toggle('rotate');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;

            // Toggle the visibility of the accordion content
            accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

            // Optional: Add a class to animate the chevron rotation
            this.querySelector('i').classList.toggle('rotate');
        });
    });

    // Function to update the footer with dynamic date and time
    function updateFooter() {
        const now = new Date();
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // Update the year and time in the footer
        document.getElementById('year').textContent = year;
        document.getElementById('time').textContent = timeString;
    }

    // Update the footer every second
    setInterval(updateFooter, 1000);
    
    // Initial call to display the time right away
    updateFooter();
});
