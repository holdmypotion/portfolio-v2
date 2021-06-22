import { useEffect, useState } from 'react';

const getNestedHeadings = headingElements => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title } = heading;
    const id = `heading-${index}`;
    heading.id = id;
    if (heading.nodeName === 'H1') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });
  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const container = document.querySelector('#article');
    const headingElements = Array.from(container.querySelectorAll('h1, h3'));
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

export default useHeadingsData;
