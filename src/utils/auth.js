// Stub functions — simulan las llamadas al backend de autenticación

const FAKE_TOKEN = "fake-jwt-token-12345";

export const register = (email, password, username) => {
  // Simula que el servidor registra al usuario exitosamente
  return Promise.resolve({ email, username });
};

export const login = (email, password) => {
  // Simula que el servidor devuelve un token JWT
  return Promise.resolve({ token: FAKE_TOKEN });
};

export const checkToken = (token) => {
  // Simula que el servidor verifica el token y devuelve los datos del usuario
  return Promise.resolve({
    name: "Laura",
    email: "laura@example.com",
  });
};
