export default defineEventHandler(async event => {
    try {
    const category = getRouterParam(event, 'category')
    const API_URL = `https://fakestoreapi.com/products/category/${category}`;

    const data = await $fetch(API_URL);
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
