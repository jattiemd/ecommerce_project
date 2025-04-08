// Banner Image
export const getBanner = async () => {
    try {
        const response = await fetch('https://dummyjson.com/image/1200x600/282828');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
    } catch (error) {
        return console.error(`Error Fetching Image: ${error}`);
    }
};


// Products List
export const getProducts = async (limit, skip) => {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(`Error fetching Products: ${error}`);
    }
}


// Product Categories
export const getProductCategories = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        return data;
    } catch (error) {
        return console.log(`Error fetching Product Categories: ${error}`);
    }
}


// Products By Category
export const getProductsByCategory = async (categoryName) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return console.log(`Error fetching Products by Category: ${error}`);
    }
}


// Single Product
export const getProduct = async (productID) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productID}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error fetching Product: ${error}`);
    }
}


// Sort Products for Product List
export const sortProducts = async (sortParam, orderParam) => {
    try {
        const response = await fetch(`https://dummyjson.com/products?sortBy=${sortParam}&order=${orderParam}&limit=0`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error Sorting Products: ${error}`);
    }
}


// Sort Products for Product Category
export const sortProductsCategory = async (categoryName, sortParam, orderParam) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${categoryName}?sortBy=${sortParam}&order=${orderParam}&limit=0`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error Sorting Products: ${error}`);
    }
}


// Login User
export const loginUser = async (username, password) => {
    try {
        const response = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error Fetching users: ${error}`);
    }
}


// Add User
export const addUser = async (firstName, lastName, email, password) => {
    try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error Adding user: ${error}`);
    }
}


// Get User
export const getUser = async (authToken) => {
    try {
        const response = await fetch('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {'Authorization': `Bearer ${authToken}`},
            credentials: 'omit'
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error getting user data: ${error}`);
    }
}


// Add cart Should I spread the products (productID, qty)?
export const createNewCart = async (userID, products) => {
    try {
        const response = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userID,
                products: [
                    ...products
                ]
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error creating new cart: ${error}`);
    }
}


// Update Cart
export const updateCart = async (userID, products) => {
    try {
        const response = await fetch(`https://dummyjson.com/carts/${userID}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                merge: true,
                products: [
                    ...products
                ]       
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.log(`Error updating cart: ${error}`);
    }
}