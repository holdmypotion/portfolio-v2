import { AnimatePresence } from 'framer-motion';
import { ContentContainer } from '../../../styles/blog/mainContentStyles';
import SideBar from '../sideBar/sideBar';
import Panels from '../UI/Panels';
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
        {/* <AnimatePresence> */}
        {article && <Article article={article} />}
        <Panels />
        {blogs && <Blogs blogs={blogs} />}
        {/* </AnimatePresence> */}
      </ContentContainer>
    </>
  );
}
