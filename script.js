// An array containing a list of countries
let countries = [
    "Algeria", "Argentina", "Australia", "Austria", "Bahrain", "Bangladesh", 
    "Belgium", "Bolivia", "Brazil", "Cambodia", "Canada", "Chile", "China", 
    "Colombia", "Costa Rica", "Czech Republic", "Denmark", "Egypt", "Ethiopia", 
    "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India", 
    "Indonesia", "Ireland", "Italy", "Japan", "Kazakhstan", "Kenya", "Kuwait", 
    "Malaysia", "Malawi", "Mexico", "Morocco", "Myanmar", "Nepal", "Netherlands", 
    "New Zealand", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
    "Saudi Arabia", "Singapore", "Slovakia", "South Africa", "South Korea", 
    "Spain", "Sudan", "Sweden", "Switzerland", "Tanzania", "Thailand", "Turkey", 
    "Uganda", "Ukraine", "United Kingdom", "United States", "Uzbekistan", 
    "Vietnam", "Zambia", "Zimbabwe"
];

// DOM elements selection
let container = document.querySelector('.container'); // The dropdown container element
let selectBtn = document.querySelector('.select-option'); // The dropdown button
let dropDownList = document.querySelector('.list-search-container'); // The container for the dropdown list and search
let searchInput = document.querySelector('#search'); // The input field used for searching countries
let lists = document.querySelector('.list'); // The <ul> element where country list items will be displayed

// Event listener for toggling the dropdown menu
selectBtn.addEventListener('click', ()=>{
    container.classList.toggle('active'); // Adds/removes the 'active' class to show or hide the dropdown
});

// Function to add all countries to the dropdown list
function addCountry(){
    lists.innerHTML = ""; // Clears the current list items
    countries.forEach((country) => { // Loops through each country in the array
        let listItem = '<li>' + country + '</li>'; // Creates an HTML <li> item for the country
        lists.insertAdjacentHTML('beforeend', listItem); // Adds the <li> item to the <ul> element
    });
    addClickEventToLi(); // Attaches click events to the newly added list items
}

// Initialize the dropdown list with all countries
addCountry();

// Function to attach click events to each <li> item
function addClickEventToLi(){
    lists.querySelectorAll('li').forEach((listItem) => { // Selects all list items
        listItem.addEventListener('click', () => { // Adds a click event listener to each item
            updateSelectCountry(listItem); // Calls the function to update the selected country
        });
    });
}

// Function to update the dropdown selection with the clicked country
function updateSelectCountry(listItem){
    searchInput.value = ""; // Clears the search input field
    selectBtn.firstElementChild.innerHTML = listItem.innerHTML; // Updates the dropdown button to show the selected country
    container.classList.remove('active'); // Hides the dropdown menu
    addCountry(); // Refreshes the dropdown list
}

// Event listener for filtering countries based on search input
searchInput.addEventListener('keyup', ()=>{
    let searchInVal = searchInput.value.toLowerCase(); // Converts the user's search input to lowercase
    let filteredCountries = countries.filter((country) => { // Filters countries based on the input
        return country.toLowerCase().startsWith(searchInVal); // Checks if the country starts with the search input
    }).map((country) => { // Maps filtered countries into <li> elements
        let listItem = '<li>' + country + '</li>';
        return listItem;
    }).join(""); // Joins all <li> items into a single string
    lists.innerHTML = filteredCountries; // Updates the <ul> element with filtered <li> items
    addClickEventToLi(); // Reattaches click events to the new list items
});
