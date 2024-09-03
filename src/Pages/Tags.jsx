import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Tags = () => {
  const { categoryName, countryName, languageName } = useParams();
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let setType;
  let setValue;
  if (categoryName) {
    setType = "category";
    setValue = categoryName;
  } else if (countryName) {
    setType = "country";
    setValue = countryName;
  } else if (languageName) {
    setType = "language";
    setValue = languageName;
  }

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/sources?${setType}=${setValue}&apikey=pub_50193983be3748f3c37d900d7dd9ddc67ffc2`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setDisplay(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (setType && setValue) {
      fetchArticles();
    }
  }, [setType, setValue]);

  if (loading) {
    return <div>Loading articles for {setValue}...</div>;
  }

  if (error) {
    return <div>Error fetching articles: {error}</div>;
  }

  return (
    <div>
      <h1>
        {" "}
        {setType === "category" &&
          `Various articles concerning ${setType}: ${setValue}`}
        {setType === "country" &&
          `Various articles concerning ${setType}: ${setValue}`}
        {setType === "language" &&
          `Various articles concerning ${setType} : ${setValue}`}
      </h1>
      <div className="article-list">
        {display.map((article, i) => (
          <div key={i} className="article-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p> {article.category} </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
