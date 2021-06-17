import Link from 'next/link';
import { SOCIAL_SVGS } from '../../../data/data';
import { Svg, Svgs } from '../../../styles/blog/footerStyles';

export default function Social() {
  const svgs = SOCIAL_SVGS.map(svg => (
    <Svg key={svg.url}>
      <Link href={svg.url}>
        <a>{svg.svg}</a>
      </Link>
    </Svg>
  ));

  return <Svgs>{svgs}</Svgs>;
}
