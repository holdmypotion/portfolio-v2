import { Container } from '../../../styles/blog/globalStyles';
import { ContentContainer } from '../../../styles/blog/mainContentStyles';
import Blogs from './blogs';

export default function () {
  return (
    <Container>
      <ContentContainer>
        <Blogs />
      </ContentContainer>
    </Container>
  );
}