// src/services/authService.js

export const registerUsuario = async (
  nombre,
  email,
  password,
  tipo = "admin",
) => {
  try {
    const response = await fetch(
      "https://usuario-service-26932749356.us-west1.run.app/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, password, tipo }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en el registro");
    }

    // Retorna los datos del servidor en caso de éxito
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
