// Function to open the side drawer
function openDrawer() {
    document.getElementById("sideDrawer").style.width = "250px";
}

// Function to close the side drawer
function closeDrawer() {
    document.getElementById("sideDrawer").style.width = "0";
}

// Function to load the clicked page inside the iframe
function loadPage(page) {
    // Set the iframe's source to the clicked page
    document.getElementById('contentIframe').src = page;

    // Close the side drawer after a link is clicked
    closeDrawer();
}
