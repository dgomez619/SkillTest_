var activeLink = null;

var activeLink = null;

function changeBackgroundColor(element) {
    // If there's an active link, revert its background color, text color, and remove underline
    if (activeLink) {
        activeLink.parentElement.style.backgroundColor = ''; // Revert to default background color
        activeLink.classList.remove('underline'); // Remove underline
        activeLink.classList.remove('text-selected'); // Revert to default text color
    }
    
    // Set the background color of the clicked link's parent div to white
    element.parentElement.style.backgroundColor = '#b0b4be';

    // Add underline and red text color to the clicked link
    element.classList.add('underline');
    element.classList.add('text-selected');

    // Update the active link
    activeLink = element;
}