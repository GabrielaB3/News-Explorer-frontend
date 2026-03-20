export const saveArticle = (article, token) => {
  const savedArticle = { ...article, _id: Date.now().toString() };
  return Promise.resolve(savedArticle);
};

export const deleteArticle = (articleId, token) => {
  return Promise.resolve({ message: "Article deleted" });
};
