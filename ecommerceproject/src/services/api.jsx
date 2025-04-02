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
        return data
    } catch (error) {
        console.log(`Error fetching Product: ${error}`);
    }
}
