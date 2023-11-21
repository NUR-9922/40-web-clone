document.addEventListener('DOMContentLoaded', function () {
    fetch('component/nav-bar.html')
        .then(response => response.text())      
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector('#navbar-container script');
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error('Error fetching and loading navigation bar:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('component/heroSection.html')
        .then(response => response.text())      
        .then(data => {
            document.getElementById('hero-sec').innerHTML = data;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector('#navbar-container script');
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error('Error fetching and loading navigation bar:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('component/categotySection.html')
        .then(response => response.text())      
        .then(data => {
            document.getElementById('categotySection').innerHTML = data;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector('#navbar-container script');
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error('Error fetching and loading navigation bar:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('component/aboutSection.html')
        .then(response => response.text())      
        .then(data => {
            document.getElementById('aboutPage').innerHTML = data;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector('#navbar-container script');
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error('Error fetching and loading navigation bar:', error));
});
