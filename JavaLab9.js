let inventory = {};

// Function to add a product
function addProduct(id, name, quantity) {
    // Add new product to inventory
    inventory[id] = {
        name: name,
        quantity: quantity
    };
    console.log("Product added");
}

// Function to display the current inventory
function displayInventory() {
    console.log("Current Inventory:");
    for (let id in inventory) {
        console.log(`ID: ${id}, Name: ${inventory[id].name}, Quantity: ${inventory[id].quantity}`);
    }
}

// Function to find a product in the inventory
function findProduct(id) {
    if (inventory[id]) {
        console.log(`Product found - ID: ${id}, Name: ${inventory[id].name}, Quantity: ${inventory[id].quantity}`);
    } else {
        console.log("Product not found.");
    }
}
