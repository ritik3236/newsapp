import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        apiKey: '8ce5b726e522439f8626ebb24c2aa4c4',
        category: 'general',
        pageSize: 10
    }
    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: null,
            loading: false,
        }
    }
    async newsFetchApi(page_no) {
        let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page_no}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(newsApiUrl);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }
    async componentDidMount() {
        this.newsFetchApi(1)
    }

    handlePreClick = () => {
        this.setState({ page: this.state.page - 1 });
        this.newsFetchApi(this.state.page - 1);
    }
    handleNextClick = () => {

        this.newsFetchApi(this.state.page + 1)
        this.setState({ page: this.state.page + 1 });

    }


    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 className="text-center my-4 ">NewsMonkey - Top Headline</h2>
                    {this.state.loading && <Loader />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map(ele => {
                            return (
                                <div className="col-md-3" key={ele.url}>
                                    <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreClick}>&laquo; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
