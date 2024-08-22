// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Tags = () => {
//   const { categoryName } = useParams();
//   const [display, setDisplay] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://newsdata.io/api/1/sources?apikey=pub_50193983be3748f3c37d900d7dd9ddc67ffc2?${categoryName}`);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setDisplay(result.articles);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [categoryName]);

//   if (loading) {
//     return <div>Loading articles for {categoryName}...</div>;
//   }

//   if (error) {
//     return <div>Error fetching articles: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Articles in Category: {categoryName}</h1>
//       <div className="article-list">
//         {display.map((article, index) => (
//           <div key={index} className="article-item">
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tags
