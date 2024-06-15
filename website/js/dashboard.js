// dashboard-scripts.js

document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('closeBtn');
    const overlayMenu = document.getElementById('overlayMenu');

    menuButton.addEventListener('click', () => {
        overlayMenu.style.width = '250px';
    });

    closeBtn.addEventListener('click', () => {
        overlayMenu.style.width = '0';
    });
    
    const signoutBtn = document.getElementById('signout-btn');
    signoutBtn.addEventListener('click', () => {
        window.location = "../"
    });
});
