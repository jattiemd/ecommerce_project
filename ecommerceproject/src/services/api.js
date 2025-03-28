// Banner Image
export const banner = async () => {
    try {
        const response = await fetch('https://dummyjson.com/image/1200x600/282828');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
    } catch (error) {
        return console.error('Error fetching image:', error);
    }
};