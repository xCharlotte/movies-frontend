import apiInstance from "@/api/apiInstance";

export default async function getMovies(
  accessToken: {
    value: string, 
  },
  page: number,
): Promise<any | null> {
  try {
    const result = await apiInstance(`/api/movies?page=${page ?? 1}`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
      },
    });

    if (!result) {
      return null;
    }

    const { data, pagination } = result;

    return {
      movies: data.data,
      pagination,
    };

  } catch (error: any) {
    console.error("Error getting movies:", error.message);
    return null;
  }
}