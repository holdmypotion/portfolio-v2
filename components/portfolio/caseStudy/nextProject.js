import Link from 'next/link';
import {
  NextProjectContainer,
  Title,
} from '../../../styles/portfolio/caseStudyStyles';
import Marquee from '../UI/marquee';

export default function NextProject({ title, slug }) {
  return (
    <>
      <Marquee text='Next Project' />
      <NextProjectContainer>
        <Link href={'/caseStudy/' + slug}>
          <a>
            <Title>{title}</Title>
          </a>
        </Link>
      </NextProjectContainer>
    </>
  );
}
