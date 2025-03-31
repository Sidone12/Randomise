export default defineEventHandler(async event => {
  try {
    const id = getRouterParam(event, 'id');
      const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const body = await readBody(event);

      const data = await $fetch(API_URL, {
        method: 'put',
        body,
      });
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
