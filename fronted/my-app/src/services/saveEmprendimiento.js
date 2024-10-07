export const saveEmprendimiento = async (emprendimientoData) => {
  try {
    const response = await fetch(
      "https://usuario-service-26932749356.us-west1.run.app/emprendimiento/guardarEmprendimiento",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emprendimientoData),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Error al guardar el emprendimiento",
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
