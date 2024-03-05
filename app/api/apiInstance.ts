const createApiInstance = (baseUrl: any) => {
  return async (endpoint: string, options = {}) => {
    const url = `${baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  };
};

const apiInstance = createApiInstance(process.env.NEXT_PUBLIC_BACKEND_API_URL);

export default apiInstance;
