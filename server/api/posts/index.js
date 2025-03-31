export default defineEventHandler(async event => {
  try {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const data = await $fetch(API_URL);
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
