import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articleList, setArticleList] = useState(articles)

    const sortByUpVotes = () => {
        var newArticles = [];
        Object.assign(newArticles, articleList);
        newArticles.sort((a, b) => {
            if (a.upvotes > b.upvotes) {
                return -1;
            }
            if (a.upvotes < b.upvotes) {
                return 1;
            }
            return 0;
        });
        setArticleList(newArticles);
    };

    const sortByDate = () => {
        var newArticles = [];
        Object.assign(newArticles, articleList);
        newArticles.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                return 1;
            }
            return 0;
        });
        setArticleList(newArticles);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">
                    Sort By
                </label>
                <button data-testid="most-upvoted-link" className="small"  onClick={() => sortByUpVotes()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small"  onClick={() => sortByDate()}>Most Recent</button>
            </div>
            <Articles articles={articleList}/>
        </div>
    );

}

export default App;
