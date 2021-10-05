import React, { Component } from 'react';

export class NewsItem extends Component {
    altImg = 'https://images.hindustantimes.com/img/2021/10/05/1600x900/WhatsApp_Image_2021-10-05_at_13.19.18_1633421297373_1633421320283.jpeg'
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card my-2">
                    <img src={!imgUrl ? this.altImg : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn float-end btn-sm btn-primary">Read more..</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
