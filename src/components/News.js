import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
      page: 1,
      category: "business",
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b2388a3cae4e4e87a27eb2a92c860f43&page=${this.state.page}`;
    console.log("iam in mount");
    this.setState({
      loding: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      loding: false,
      totalResults: parsedData.totalResults,
    });
  }

  prev = async () => {
    console.log("clicked on prev");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=b2388a3cae4e4e87a27eb2a92c860f43&page=${this.state.page - 1}`;
    this.setState({
      loding: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loding: false,
    });
  };

  next = async () => {
    console.log("clicked on next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=b2388a3cae4e4e87a27eb2a92c860f43&page=${this.state.page + 1}`;
    this.setState({
      loding: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loding: false,
    });
  };
  render() {
    return (
      <>
        <div className="App-header">
          <h1>
            <strong>news headlines </strong>
          </h1>
        {this.state.loding&&<Loading/>}
          <div className="row">
            
            {!this.state.loding&& this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  
                  <Newsitem
                    more={element.url}
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>

          <div className="container">
            <div className="botton">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark btn-sm"
                onClick={this.prev}
              >
                {" "}
                &larr; previuos
              </button>
            </div>
            <div className="botton2">
              <button
                type="button"
                disabled={this.state.page >= this.state.articles.length}
                className="btn btn-dark btn-sm"
                onClick={this.next}
                style={{ float: "none" }}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
