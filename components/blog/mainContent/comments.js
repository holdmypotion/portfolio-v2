import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../../store/theme-context';

import { Container, Heading } from '../../../styles/blog/commentsStyles';

export default function Comments() {
  const commentBox = useRef();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'holdmypotion/portfolio-v2');
    scriptEl.setAttribute('label', 'blog-comment');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute(
      'theme',
      theme === 'dark' ? 'github-dark' : 'github-light'
    );
    commentBox.current.appendChild(scriptEl);

    return () => {
      try {
        if (commentBox.current !== null) {
          console.log(commentBox);
          commentBox.current.removeChild(commentBox.current.children[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
  }, [theme]);

  return (
    <Container>
      <Heading>Discussion</Heading>
      <div style={{ width: '100%' }} id='comments'>
        <div ref={commentBox}></div>
      </div>
    </Container>
  );
}
