import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
       <div className="row">
                  <div className="col-md-4">
                  <NewsItem  title="mytitlr" description ="mydescription" imgUrl="https://www.shutterstock.com/search/breaking-news-colour"/>
                      <NewsItem  title="mytitlr" description ="mydescription"/>
                  <div className="col-md-4">
                  <NewsItem  title="mytitlr" description ="mydescription"/>
                  </div>
              </div>
      
        </div>
      </div>
    )
  }
}

export default News
// 0f895488251f4fffa70a558d272114bf