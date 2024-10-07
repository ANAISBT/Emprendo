export const login = async (email, password) => {
  try {
    const response = await fetch(
      "https://usuario-service-26932749356.us-west1.run.app/auth/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error de autenticación");
    }

    // Retorna los datos del servidor en caso de éxito
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
