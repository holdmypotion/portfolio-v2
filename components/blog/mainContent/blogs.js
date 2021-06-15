import { useContext } from 'react';
import { ARTICLES } from '../../../data/data';
import { SearchContext } from '../../../store/search-context';
import { Container } from '../../../styles/blog/blogsStyles';
import { Flex } from '../../../styles/blog/globalStyles';
import BlogThumb from './blogThumb';

export default function Blogs() {
  // TODO: Set the excerpt from the body of the article according to the type.
  const searchContext = useContext(SearchContext);
  let filteredArticles = ARTICLES.filter(article => {
    if (article.title.toLowerCase().includes(searchContext.query)) {
      return article;
    } else {
      return null;
    }
  });

  console.log(filteredArticles);

  return (
    <Container>
      {filteredArticles.map(article => (
        <BlogThumb
          key={article.id}
          type={article.type}
          title={article.title}
          excerpt={article.body}
          comments={article.comments}
          date={article.date}
        />
      ))}
    </Container>
  );
}
