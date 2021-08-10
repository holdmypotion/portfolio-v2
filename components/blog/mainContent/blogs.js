import { useContext } from 'react';
import { SearchContext } from '../../../store/search-context';
import { FilterContext } from '../../../store/filter-context';
import { Container } from '../../../styles/blog/blogsStyles';
import BlogThumb from './blogThumb';

export default function Blogs({ blogs }) {
  const searchContext = useContext(SearchContext);
  const { tags } = useContext(FilterContext);
  let filteredArticles = null;
  if (blogs) {
    filteredArticles = blogs.filter(article => {
      if (tags.length === 0) {
        return article;
      }
      if (tags.some(val => article.fields.tags.includes(val))) {
        return article;
      } else {
        return null;
      }
    });

    filteredArticles = filteredArticles.filter(article => {
      if (article.fields.title.toLowerCase().includes(searchContext.query)) {
        return article;
      } else {
        return null;
      }
    });
  }

  return (
    <Container>
      {filteredArticles !== null &&
        filteredArticles.map((article, index) => {
          const data = article.fields;
          const types = ['small', 'large', 'medium'];
          const size = [360, 440, 400];
          const type = types[index % 3];
          const excerpt = `${data.description.substr(0, size[index % 3])}...`;

          return (
            <BlogThumb
              key={data.slug}
              slug={data.slug}
              type={type}
              title={data.title}
              excerpt={excerpt}
              date={data.publishDate}
              image={data.featuredImage}
            />
          );
        })}
    </Container>
  );
}
