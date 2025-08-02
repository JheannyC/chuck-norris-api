const URL = 'https://api.chucknorris.io/jokes';

async function getRandomJoke() {
    try {
            const response = await fetch(`${URL}/random`);
            const joke = await response.json();
            const value = joke.value;
            return `Random joke: ${value}`;
    } catch (error) {
        console.log("An unexpected error occurred. Please try again later.", error)
    }
}

async function getRandomJokeByCategory(category) {
    try {
            const response = await fetch(`${URL}/random?category=${category}`);
            const joke = await response.json();
            const categories = joke.categories;
            const randomJoke = joke.value;
            return `Choosed category: ${categories}\nRandom joke: ${randomJoke}`;
    } catch (error) {
          console.log("An unexpected error occurred. Please try again later.", error)
    }
}

async function getAllCategories() {
    try {
            const response = await fetch(`${URL}/categories`);
            const categories = await response.json();
            categories.forEach((categories) => {
                categories
            });
            return categories.join(', ');
       
    } catch (error) {
          console.log("An unexpected error occurred. Please try again later.", error)
    }
}

module.exports = {
    getRandomJoke,
    getRandomJokeByCategory,
    getAllCategories
}
