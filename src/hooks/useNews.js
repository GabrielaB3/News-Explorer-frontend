import { useState } from "react";
import * as newsApi from "../utils/NewsApi";

export function useNews() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoResults, setHasNoResults] = useState(false);

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setHasNoResults(false);
    setCards([]);

    return newsApi
      .getNews(keyword)
      .then((data) => {
        if (data.articles.length === 0) {
          setHasNoResults(true);
        } else {
          const formattedCards = data.articles.map((article) => ({
            image: article.urlToImage,
            date: new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            title: article.title,
            text: article.description,
            source: article.source.name,
            link: article.url,
            keyword: keyword,
          }));
          setCards(formattedCards);
        }
      })
      .catch((err) => {
        console.error(err);
        setHasNoResults(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { cards, isLoading, hasNoResults, handleSearchSubmit };
}
