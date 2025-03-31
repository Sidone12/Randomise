export default defineEventHandler(async event => {
  try {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const body = await readBody(event);

    const data = await $fetch(API_URL, {
      method: 'post',
      body,
    });
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
