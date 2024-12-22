import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem 
              title="My Title" 
              description="My Description" 
              imgUrl="https://www.pexels.com/photo/camping-among-trees-with-city-behind-at-night-15838266/" 
            />
          </div>
          <div className="col-md-4">
            <NewsItem 
              title="My Title 2" 
              description="My Description 2" 
              url="https://www.example.com" 
            />
          </div>
          <div className="col-md-4">
            <NewsItem 
              title="My Title 3" 
              description="My Description 3" 
              url="https://www.anotherexample.com" 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
// 0f895488251f4fffa70a558d272114bf