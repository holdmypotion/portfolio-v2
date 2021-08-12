import {
  MarqueeContainer,
  Track,
} from '../../../styles/portfolio/globalStyles';

const Text = ({ text }) => {
  return <h1>{text}</h1>;
};

export default function Marquee({ text }) {
  return (
    <div>
      <MarqueeContainer className='marquee'>
        <Track className='track'>
          <Text text={text} />
          <Text text={text} />
          <Text text={text} />
          <Text text={text} />
        </Track>
      </MarqueeContainer>
    </div>
  );
}
