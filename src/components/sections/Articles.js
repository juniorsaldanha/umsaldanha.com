import React, { Component } from "react";
import Article from "../elements/Article";

class Articles extends Component {
    constructor(props) {
        super();
        this.state = { 
            articles: [],
            loading: true,
            error: null
        };
    }

    getDevToArticles(devTo) {
        fetch(devTo)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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
                    articles.push(<div className="column" key={`empty-${i}`}></div>);
                }
                this.setState({ articles: articles, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching Dev.to articles:', error);
                this.setState({ error: error.message, loading: false });
            });
    }

    getHashnodeArticles(hashnode, hashnodeBody) {
        fetch(hashnode, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({query: hashnodeBody})
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                let articles = [];
                if (data.data && data.data.user && data.data.user.publication && data.data.user.publication.posts) {
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
                }
                var offset = 4 - articles.length;
                for (var i = 0; i < offset; i++) {
                    articles.push(<div className="column" key={`empty-${i}`}></div>);
                }
                this.setState({ articles: articles, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching Hashnode articles:', error);
                // Fallback to Dev.to if Hashnode fails
                this.getDevToArticles("https://dev.to/api/articles?username=umsaldanha");
            });
    }

    componentDidMount() {
        const articleProvider = "hashnode";
        const devTo = "https://dev.to/api/articles?username=umsaldanha";
        const hashnode = "https://api.hashnode.com/";
        const hashnodeBody = `{ user(username:"umsaldanha") { publication { posts(page:0) { slug\n title\n brief\n coverImage } } } }`;

        if (articleProvider === "hashnode") {
            this.getHashnodeArticles(hashnode, hashnodeBody);
        } else if (articleProvider === "devto") {
            this.getDevToArticles(devTo);
        } else {
            // Default to Dev.to if no provider specified
            this.getDevToArticles(devTo);
        }
    }

    render() {
        const { articles, loading, error } = this.state;

        return (
            <section className="section" id="articles">
                <div className="container">
                    <h1 className="title terminal-text text-glow has-text-centered">Latest Articles</h1>
                    <h2 className="subtitle is-4 has-text-centered">Thoughts on technology and development</h2>
                    
                    {loading && (
                        <div className="has-text-centered">
                            <p className="terminal-text loading-dots">Loading articles</p>
                        </div>
                    )}
                    
                    {error && (
                        <div className="has-text-centered">
                            <p className="terminal-text">Unable to load articles at the moment</p>
                            <p className="has-text-grey">Check out my <a href="https://dev.to/umsaldanha" target="_blank" rel="noopener noreferrer" className="terminal-text">Dev.to profile</a> for latest posts</p>
                        </div>
                    )}
                    
                    {!loading && !error && (
                        <div className="columns is-multiline">
                            {articles}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Articles;
