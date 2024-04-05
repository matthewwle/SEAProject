/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
    { title: "Fresh Prince of Bel Air", imageUrl: FRESH_PRINCE_URL },
    { title: "Curb Your Enthusiasm", imageUrl: CURB_POSTER_URL },
    { title: "East Los High", imageUrl: EAST_LOS_HIGH_POSTER_URL }
];

let isRemoveMode = false; // Flag to track if we're in remove mode


// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Assuming the first .card is your template and it's outside the #card-container in your HTML.
    const templateCard = document.querySelector(".card").cloneNode(true);
    templateCard.style.display = "none"; // Make sure the template itself is not visible

    titles.forEach((show, index) => {
        const card = templateCard.cloneNode(true); // Make a deep clone of the template
        card.style.display = "block"; // Ensure the cloned card is visible

        // Use the editCardContent function to set the title and image URL.
        // Assuming editCardContent(card, newTitle, newImageURL) is defined to update these elements.
        editCardContent(card, show.title, show.imageUrl);

        // Set the onclick event for card removal, if in remove mode.
        card.onclick = function() {
            if (isRemoveMode) {
                removeCard(index);
                toggleRemoveMode(); // Optionally toggle off remove mode after a card is removed
            }
        };

        cardContainer.appendChild(card); // Append the card to the container
    });
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

function addCard(){
    
        const title = prompt("Enter the title of the TV show:");
        const imageUrl = prompt("Enter the URL for the TV show's poster image:");
    
        // Adding the new show as an object to the titles array
        titles.push({ title, imageUrl });
    
        // Refresh the displayed cards to include the new one
        showCards();
    }


function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// Use the existing titles array and functions, then add the toggleRemoveMode function
function toggleRemoveMode() {
    isRemoveMode = !isRemoveMode; // Toggle the flag
    const modeText = isRemoveMode ? "Cancel Remove Mode" : "Remove Card Mode";
    document.getElementById("toggleRemoveMode").textContent = modeText;
}

function removeCard(index) {
    titles.splice(index, 1); // Remove the item at the index
    showCards(); // Refresh the display of cards
}

function searchCards() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase(); // Get the current value of the input field and convert it to lower case for case-insensitive comparison

    // Filter the titles array to get only those shows whose title includes the search query
    const filteredTitles = titles.filter(show => show.title.toLowerCase().includes(searchQuery));

    // Now display only the filtered titles
    showFilteredCards(filteredTitles);
}

function showFilteredCards(filteredTitles) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear the card container before showing filtered cards

    // Similar to showCards, but use filteredTitles instead of the original titles array
    filteredTitles.forEach((show, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-content">
                <h2>${show.title}</h2>
                <img src="${show.imageUrl}" alt="${show.title} Poster">
            </div>`;
        card.style.display = "block";
        card.onclick = function() {
            if (isRemoveMode) {
                removeCard(titles.findIndex(title => title.title === show.title)); // Find the original index in titles to remove
                toggleRemoveMode();
            }
        };
        cardContainer.appendChild(card);
    });
}

function toggleRemoveMode() {
    isRemoveMode = !isRemoveMode; // Toggle the flag
    const modeText = isRemoveMode ? "Cancel Remove Mode" : "Remove Card Mode";
    document.getElementById("toggleRemoveMode").textContent = modeText;

    // Show or hide the remove mode indicator based on isRemoveMode
    document.getElementById("removeModeIndicator").style.display = isRemoveMode ? "block" : "none";
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);