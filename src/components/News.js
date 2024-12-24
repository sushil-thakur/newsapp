import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    
  }

  
   async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0f895488251f4fffa70a558d272114bf&page=1&pageSize=6";
    let data =  await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});
  }
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=
    // 0f895488251f4fffa70a558d272114bf&page=${this.state.page + 1}&pageSize=6`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
    
  }}
  handlepreviosClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category
    // =business&apiKey=0f895488251f4fffa70a558d272114bf&page=${this.state.page - 1}&pageSize=6`
   let data =  await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });;
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
       <div className="container d-flex justify-content-between"></div>
       <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlepreviosClick}>&larr; previous</button>
       <button type="button" className="btn btn-primary"onClick={this.handleNextClick}>next &rarr;</button>

      </div>
    );
  } 
} 

export default News;
// 0f895488251f4fffa70a558d272114bf