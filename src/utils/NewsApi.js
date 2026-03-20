const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = "0e5e5cb633c741159740f4f1d0ceed0b";

export const getNews = (keyword) => {
  const to = new Date().toISOString();
  const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  return fetch(
    `${newsApiBaseUrl}?q=${keyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
