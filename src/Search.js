
import React, { useState } from 'react';

const Search = ({ articles }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => (
      part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part
    ));
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.snippet.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
    <div style={{marginLeft:'1vw'}}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        className='search-bar'
      />
      <p><strong>{filteredArticles.length}</strong> posts were found</p>
      </div>
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>
            <h2>{highlightText(article.title, query)}</h2>
            <p>{highlightText(article.snippet, query)}</p>
            <small>{article.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
