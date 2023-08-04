import ArticlesList from '../components/ArticlesList';
import articles from './articles-content';

function ArticlesListPage() {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
        </>
    )
}

export default ArticlesListPage;