import { useState } from 'react';

import useHeadingsData from '../../../hooks/useHeadingsData';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import {
  Content,
  InnerList,
  ListItem,
  OuterList,
  Title,
  TOC,
} from '../../../styles/blog/tOCStyles';

const Headings = ({ headings, activeId }) => (
  <OuterList>
    {headings.map(heading => (
      <ListItem
        key={heading.id}
        active={heading.id === activeId ? true : false}
      >
        <a
          href={`#${heading.id}`}
          onClick={e => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <InnerList>
            {heading.items.map(child => (
              <ListItem
                key={child.id}
                active={heading.id === activeId ? true : false}
              >
                <a
                  href={`#${child.id}`}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {child.title}
                </a>
              </ListItem>
            ))}
          </InnerList>
        )}
      </ListItem>
    ))}
  </OuterList>
);

export default function TableOfContent() {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState('');
  useIntersectionObserver(setActiveId);
  console.log(activeId);
  return (
    <TOC aria-label='Table Of Content'>
      <Title>Table Of content</Title>
      <Content>
        <Headings headings={nestedHeadings} activeId={activeId} />
      </Content>
    </TOC>
  );
}
