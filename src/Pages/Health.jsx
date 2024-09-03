import React, { useState, useEffect } from "react";

const Health = () => {
  const [health, setHealth] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reply = fetch("");
        if (!reply.ok) {
          throw new Error(`${reply.status}`);
        }
        const res = await reply.json();
        setHealth(res.results);
        setLoading(true);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default Health;
