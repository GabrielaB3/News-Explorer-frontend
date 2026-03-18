// Stub functions — simulan las llamadas al backend para guardar/eliminar artículos

export const saveArticle = (article, token) => {
  // Simula que el servidor guarda el artículo y devuelve el artículo con un _id
  const savedArticle = { ...article, _id: Date.now().toString() };
  return Promise.resolve(savedArticle);
};

export const deleteArticle = (articleId, token) => {
  // Simula que el servidor elimina el artículo por su _id
  return Promise.resolve({ message: "Article deleted" });
};
