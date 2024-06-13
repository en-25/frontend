// dashboard-scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menuButton');
    const closeBtn = document.getElementById('closeBtn');
    const overlayMenu = document.getElementById('overlayMenu');

    menuButton.addEventListener('click', () => {
        overlayMenu.style.width = '250px';
    });

    closeBtn.addEventListener('click', () => {
        overlayMenu.style.width = '0';
    });
});
