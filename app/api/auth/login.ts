import apiInstance from "@/api/apiInstance";

export async function authenticateUser(email: string, password: string): Promise<any> {
  try {
    const response = await apiInstance("/oauth/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: "password",
        client_id: `${process.env.NEXT_PUBLIC_PASSPORT_CLIENT_ID}`,
        client_secret: `${process.env.NEXT_PUBLIC_PASSPORT_CLIENT_SECRET}`,
        username: email,
        password: password,
        scope: '',
      }),
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function refreshToken(refreshToken: string): Promise<any> {
  try {
    const response = await apiInstance("/oauth/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: `${process.env.NEXT_PUBLIC_PASSPORT_CLIENT_SECRET}`,
        client_secret: `${process.env.NEXT_PUBLIC_PASSPORT_CLIENT_SECRET}`,
        scope: '',
      }),
    });

    return response;
  } catch (error) {
    throw error;
  }
}


