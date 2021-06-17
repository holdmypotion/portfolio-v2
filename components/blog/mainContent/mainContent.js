import { ContentContainer } from '../../../styles/blog/mainContentStyles';
import Blogs from './blogs';

export default function mainContent({ blogs }) {
  return (
    <ContentContainer>
      <Blogs blogs={blogs} />
    </ContentContainer>
  );
}
