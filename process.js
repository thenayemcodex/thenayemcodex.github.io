// Dark Mode Toggle
const darkModeIcon = document.getElementById('dark-mode-icon');

darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change the icon based on the mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = '🌞'; // Switch to sun icon for light mode
    } else {
        darkModeIcon.textContent = '🌙'; // Switch to moon icon for dark mode
    }
});

// Dropdown menu behavior for projects
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'block';
});
dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-content').style.display = 'none';
});
