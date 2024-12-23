import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
    
  }
   async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f895488251f4fffa70a558d272114bf";
    let data =  await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData});
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} 
              description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
// 0f895488251f4fffa70a558d272114bf