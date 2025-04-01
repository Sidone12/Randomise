export default defineEventHandler(async event => {
  try {
    const API_URL = 'https://fakestoreapi.com/products/categories';

    const data = await $fetch(API_URL);
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
