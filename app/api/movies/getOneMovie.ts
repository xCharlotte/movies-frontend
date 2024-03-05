import apiInstance from "@/api/apiInstance";

export default async function getOneMovie(
  accessToken: {
    value: string,
  },
  path: string | null,
): Promise<any | null> {
  try {
    const result = await apiInstance(`/api${path}`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
      },
    });

    if (!result) {
      return null;
    }

    return result.data;

  } catch (error: any) {
    console.error("Error getting movie:", error.message);
    return null;
  }
}