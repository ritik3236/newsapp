import React, { Component } from 'react';

export class NewsItem extends Component {
    altImg = 'https://images.hindustantimes.com/img/2021/10/05/1600x900/WhatsApp_Image_2021-10-05_at_13.19.18_1633421297373_1633421320283.jpeg'
    render() {
        let { title, description, imgUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <>
                <div className="card my-2">
                    <img src={!imgUrl ? this.altImg : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="position-absolute badge top-0 start-0 bg-dark bg-opacity-75" >{source}</span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">Read more..</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
