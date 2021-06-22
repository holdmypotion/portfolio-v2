import { useState } from 'react';

import useHeadingsData from '../../../hooks/useHeadingsData';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { TOC } from '../../../styles/blog/tOCStyles';

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map(heading => (
      <li
        key={heading.id}
        // className={heading.id === activeId ? styles.active : ''}
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
          <ul>
            {heading.items.map(child => (
              <li
                key={child.id}
                // className={child.id === activeId ? styles.active : ''}
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
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default function TableOfContent() {
  const { nestedHeadings } = useHeadingsData();
  const [activeId, setActiveId] = useState('');
  useIntersectionObserver(setActiveId);
  console.log(nestedHeadings);
  return (
    <TOC aria-label='Table Of Content'>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </TOC>
  );
}
