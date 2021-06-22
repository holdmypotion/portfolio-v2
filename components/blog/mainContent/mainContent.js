import { ContentContainer } from '../../../styles/blog/mainContentStyles';
import SideBar from '../sideBar/sideBar';
import Article from './article';
import Blogs from './blogs';

export default function MainContent({ article, blogs }) {
  let type = '';
  if (article) {
    type = 'article';
  } else if (blogs) {
    type = 'home';
  }
  return (
    <>
      <SideBar type={type} />
      <ContentContainer>
        {article && <Article article={article} />}

        {blogs && <Blogs blogs={blogs} />}
      </ContentContainer>
    </>
  );
}
