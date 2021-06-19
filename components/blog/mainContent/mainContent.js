import { ContentContainer } from '../../../styles/blog/mainContentStyles';
import SideBar from '../sideBar/sideBar';
import Article from './article';
import Blogs from './blogs';

export default function MainContent({ article, blogs }) {
  return (
    <>
      <SideBar />
      <ContentContainer>
        {article && <Article article={article} />}

        {blogs && <Blogs blogs={blogs} />}
      </ContentContainer>
    </>
  );
}
