// Stub functions — simulan las llamadas al backend de autenticación

const FAKE_TOKEN = "fake-jwt-token-12345";

export const register = (email, password, username) => {
  return Promise.resolve({ email, username });
};

export const login = (email, password) => {
  return Promise.resolve({ token: FAKE_TOKEN });
};

export const checkToken = (token) => {
  return Promise.resolve({
    name: "Laura",
    email: "laura@example.com",
  });
};
