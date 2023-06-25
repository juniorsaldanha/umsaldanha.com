import React, { Component } from "react";
import Article from "../elements/Article";

class Articles extends Component {
    constructor(props) {
        super();
        this.state = { articles: [] };
    }

    getDevToArticles(devTo) {
        fetch(devTo)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let articles = [];
                data = data.slice(0, 4);
                data.forEach((element, index) => {
                    articles.push(
                        <div className="column" key={index}>
                            <Article
                                key={index}
                                title={element.title}
                                url={element.url}
                                image={element.cover_image}
                                extract={element.description}
                            />
                        </div>
                    );
                });
                var offset = 4 - data.length;
                for (var i = 0; i < offset; i++) {
                    articles.push(<div className="column"></div>);
                }
                this.setState({ articles: articles });
            });
    }

    getHashnodeArticles(hashnode, hashnodeBody) {
        fetch(hashnode, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({query: hashnodeBody})
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let articles = [];
                data = data.data.user.publication.posts.slice(0, 4);
                data.forEach((element, index) => {
                    articles.push(
                        <div className="column" key={index}>
                            <Article
                                key={index}
                                title={element.title}
                                url={"https://blog.umsaldanha.com/" + element.slug}
                                image={element.coverImage}
                                extract={element.brief}
                            />
                        </div>
                    );
                });
                var offset = 4 - data.length;
                for (var i = 0; i < offset; i++) {
                    articles.push(<div className="column"></div>);
                }
                this.setState({ articles: articles });
            });
    }

    componentDidMount() {
        const articleProvider = "hashnode";
        const devTo = "https://dev.to/api/articles?username=umsaldanha";
        const hashnode = "https://api.hashnode.com/";
        const hashnodeBody = `{ user(username:"umsaldanha") { publication { posts(page:0) { slug\n title\n brief\n coverImage } } } }`;

        if (articleProvider === "hashnode") {
            this.getHashnodeArticles(hashnode, hashnodeBody);
        }
        if (articleProvider === "devto") {
            this.getDevToArticles(devTo);
        }
    }

    render() {
        return (
            <section className="section" id="articles">
                <div className="container">
                    <h1 className="title">Articles</h1>
                    <h2 className="subtitle is-4">My latest articles</h2>
                    <div className="columns">{this.state.articles}</div>
                </div>
            </section>
        );
    }
}

export default Articles;
