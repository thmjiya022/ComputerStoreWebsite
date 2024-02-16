// Sample data for items on sale

const items = [
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1600", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1800", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R2200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R6200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R1200", image: "lenovo.png"},
    {name: 'Lenovo Computer', price: "R5200", image: "lenovo.png"}
    //Add more items as needed
];


// Function to display items on the webpage
function displayItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const image = document.createElement('img');
        image.src = 'item_pictures/' + item.image;
        image.alt = item.name;
        itemDiv.appendChild(image);

        const details = document.createElement('div');
        details.classList.add('details');
        itemDiv.appendChild(details);


        const name = document.createElement('h3');
        name.textContent = item.name;
        itemDiv.appendChild(name);

        const price = document.createElement('p');
        price.textContent = item.price;
        itemDiv.appendChild(price);


        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('add-to-cart-button');
        addToCartButton.addEventListener('click', function() {
            addToCart(item.name); // Call addToCart function with item name
        });
        itemDiv.appendChild(addToCartButton);


        itemList.appendChild(itemDiv);
    });
}

// Function to show the login area
function showLoginArea() {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'block'; // Show the login area
}

// Function to hide the login area
function hideLoginArea() {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none'; // Hide the login area
}

// Function to simulate login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform login validation (replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful');
        hideLoginArea(); // Hide the login area after successful login
    } else {
        alert('Invalid username or password');
    }
}


// Function to sort items based on selected option
function sortItems() {
    const sortOption = document.getElementById('sortOptions').value;
    if (sortOption === 'lowToHigh') {
        items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'highToLow') {
        items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    displayItems(); // Re-display items after sorting
}

// Function to add an item to the cart
function addToCart(itemName) {
    alert('Item added to cart: ' + itemName);
}


// Call the displayItems function when the page loads
window.onload = displayItems;

