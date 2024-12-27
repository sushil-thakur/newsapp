import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
                  <img src={!imgUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O4RKEANMD3JIIOOUYFDFG23V4I_size-normalized.JPG&w=1440": imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{description}</p>
                          <a href={newsUrl} className="btn btn-sm btn btn-primary">Read more</a>
                        </div>
                </div>
      </div>
    )
  }
}

export default NewsItem