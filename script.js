document.addEventListener('DOMContentLoaded', function () {
    loadSection('navbar-container', 'component/htmlFiles/nav-bar.html');
    loadSection('hero-sec', 'component/htmlFiles/heroSection.html');
    loadSection('categotySection', 'component/htmlFiles/categotySection.html');
    loadSection('aboutPage', 'component/htmlFiles/aboutSection.html');
    loadSection('FeaturedCourses', 'component/htmlFiles/FeaturedCourses.html');
});

function loadSection(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            console.log(containerId);
            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector(`#${containerId} script`);
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error(`Error fetching and loading section ${containerId}:`, error));
}



window.onload = function(){
    document.querySelector(".mein").style.display = "none";
    setTimeout(function(){
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".loading-screen").style.opacity = "0";
        document.querySelector(".mein").style.display = "block";
    },3000)
}

