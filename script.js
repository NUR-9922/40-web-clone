// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and insert the navigation bar component
    fetch('component/nav-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching navigation bar:', error));
});


