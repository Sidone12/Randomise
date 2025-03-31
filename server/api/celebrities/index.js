export default defineEventHandler(async event => {
  try {
    const config = useRuntimeConfig(event);
    const {apiNinjaKey} = config;
    const query = getQuery(event);
    const API_URL = 'https://api.api-ninjas.com/v1/celebrity';

    if (!apiNinjaKey) {
      throw createError({statusCode: 500, message: 'API key is missing'});
    }

    const data = await $fetch(API_URL, {
      headers: {'X-Api-Key': apiNinjaKey},
      query,
    });
    return data;
  } catch (error) {
    return {error: error.message || 'An unexpected error occurred'};
  }
});
