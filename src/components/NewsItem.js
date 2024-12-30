import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
   let {title, description, imgUrl, newsUrl, author, date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span class="position-absolute top-0 
                        translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                          {source}
                        
                          </span>
                  <img src={!imgUrl ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O4RKEANMD3JIIOOUYFDFG23V4I_size-normalized.JPG&w=1440": imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">{description}</p>
                          <p className="card-text"><small className="text-body-secondary">By{!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                          <a href={newsUrl} className="btn btn-sm btn btn-primary">Read more</a>
                        </div>
                </div>
      </div>
    )
  }
}

export default NewsItem