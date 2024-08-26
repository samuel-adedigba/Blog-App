import React, { useState, useEffect } from 'react';
import PostContent from './postContent';
import PostFooter from './postFooter';
import PostHeader from './postHeader';
import { useParams } from 'react-router-dom';

const Headlines = () => {
  const {categoryName}= useParams();
  const [update, setUpdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = `https://newsdata.io/api/1/sources?apikey=pub_50193983be3748f3c37d900d7dd9ddc67ffc`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error!: ${response.status}`);
        }
        const result = await response.json();
        setUpdate(result.results);
      } 
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ ]);

  if (loading) {
    return <div>Loading news headlines...</div>;
  }

  if (error) {
    return <div>Error fetching news headlines: {error}</div>;
  }

  return (
   
      <div>
        {update.map((item) => (
          <div key={item.id} >
          <PostHeader  postName={item.name} 
            imageIcon={item.icon}
             /> 
            <PostContent postDescription={item.description} postUrl={item.url}
            />
            <PostFooter postCategory={item.category} postLanguage={item.language} postCountry={item.country} />
            
          </div>
        ))}
      </div>
    
  );
};

export default Headlines;
