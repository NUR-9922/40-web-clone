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
            document.getElementById(containerId).innerHTML += data;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = document.querySelector(`#${containerId} script`);
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error(`Error fetching and loading section ${containerId}:`, error));
};








document.addEventListener('DOMContentLoaded', function () {
    loadPageIntoElement('box-1', 'component/htmlFiles/FeaturedCourses.html', 'box-1');
});

function loadPageIntoElement(elementId, filePath, extractElementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("overlayPopup");
            const extractedElement = extractElementById(data, extractElementId);
            container.innerHTML = extractedElement;

            // Add a slight delay before applying styles
            setTimeout(() => {
                const scriptElement = container.querySelector(`#${elementId} script`);
                if (scriptElement) {
                    eval(scriptElement.innerHTML);
                }
            }, 50); // Adjust the delay as needed
        })
        .catch(error => console.error(`Error fetching and loading page into element ${elementId}:`, error));
};



function extractElementById(htmlString, elementId) {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const extractedElement = doc.getElementById(elementId);

    if (extractedElement) {
        // Exclude the unwanted part by removing the innerHTML of the box-inner div
        const boxInnerElement = extractedElement.querySelector('.box-inner');
        if (boxInnerElement) {
            boxInnerElement.innerHTML = '';
        }

        return extractedElement.outerHTML;
    } else {
        return '';
    }
};




window.onload = function () {
    document.querySelector(".mein").style.display = "none";
    setTimeout(function () {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".loading-screen").style.opacity = "0";
        document.querySelector(".mein").style.display = "block";
    }, 3000)
};

