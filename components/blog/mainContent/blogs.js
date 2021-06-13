import { Container } from '../../../styles/blog/blogsStyles';
import { Flex } from '../../../styles/blog/globalStyles';
import BlogThumb from './blogThumb';

export default function Blogs() {
  return (
    <Container>
      <BlogThumb
        type='medium'
        para='I have been wanting to redo my portfolio, and one of the major things I wanted it to have was smooth scrolling. So, I created a super simple smooth-scrolling effect with no extra dependencies but react.'
      />
      <BlogThumb
        type='small'
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. .'
      />
      <BlogThumb
        type='large'
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. Pellentesque orci sed ut leo sollicitudin eleifend.
            Magna congue dignissim blandit malesuada quis.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. Pellentesque orci sed ut leo sollicitudin eleifend.
            ....'
      />
      <BlogThumb
        type='medium'
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. Pellentesque orci sed ut leo sollicitudin eleifend.
            Magna congue dignissim blandit malesuada quis Magna congue dignissim ....'
      />
      <BlogThumb
        type='medium'
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. Pellentesque orci sed ut leo sollicitudin eleifend.
            Magna congue dignissim blandit malesuada quis Magna congue dignissim....'
      />
      <BlogThumb
        type='small'
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            sit sem lectus. .'
      />
    </Container>
  );
}
