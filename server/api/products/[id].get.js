export default defineEventHandler(async event => {
  try {
    const id = getRouterParam(event , 'id');
    const API_URL = `https://fakestoreapi.com/products/${id}`;

    const data = await $fetch(API_URL);
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
