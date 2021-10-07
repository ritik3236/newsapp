import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import ErrorPage from './ErrorPage';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
        category: 'general',
        pageSize: 10,
    }
    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            loading: true,
            status: 'ok',
            errorData: [],
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }
    async newsFetchApi(page_no) {
        const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page_no}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(20);
        // this.setState({ loading: true });
        let data = await fetch(newsApiUrl);
        let parsedData = await data.json();
        if (parsedData.status !== 'ok') {
            this.setState({ status: 'error' });
            this.props.setProgress(100);
            return (404);
        }
        this.props.setProgress(80);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.newsFetchApi(1)
    }
    /*
        handlePreClick = () => {
            this.setState({ page: this.state.page - 1 });
            this.newsFetchApi(this.state.page - 1);
        }
        handleNextClick = () => {
            this.newsFetchApi(this.state.page + 1)
            this.setState({ page: this.state.page + 1 });
        }
    */

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newsApiUrl);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })
    }

    render() {
        if (this.state.status === 'ok') {
            return (
                <>
                    <h2 className="text-center my-4 ">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headline</h2>
                    {this.state.loading && <Loader />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loader />}
                        endMessage={<p style={{ textAlign: 'center' }}> <b>Yay! You have seen it all. Are You?</b></p>}
                    >
                        <div className="container mb-3">
                            <div className="row">
                                {this.state.articles.map(ele => {
                                    return (
                                        <div className="col-md-3" key={ele.url}>
                                            <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage}
                                                newsUrl={ele.url} author={ele.author} publishedAt={ele.publishedAt} source={ele.source.name} />
                                        </div>
                                    )
                                })}
                            </div></div>

                    </InfiniteScroll>
                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreClick}>&laquo; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-primary" onClick={this.handleNextClick}>Next &raquo;</button>
                    </div> */}

                </>
            )
        }
        else {
            return (
                <ErrorPage errorData="Error" />
            )
        }
    }
}

export default News
