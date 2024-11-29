// src/App.js
import React from 'react';
import Search from './Search';

const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    snippet: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties.",
    date: "Oct 09, 2018"
  },
  {
    title: "Getting started with React",
    snippet: "React is a JavaScript library for building user interfaces.",
    date: "May 01, 2019"
  },
  {
    title: "An introduction to Angular",
    snippet: "Angular is a platform for building mobile and desktop web applications.",
    date: "Nov 10, 2020"
  },
  {
    title: "Understanding Vue.js",
    snippet: "Vue.js is a progressive JavaScript framework for building user interfaces.",
    date: "Jan 15, 2021"
  }
];

const App = () => {
  return (
    <div>
      <h1>Search </h1>
      <Search articles={articles} />
    </div>
  );
};

export default App;
