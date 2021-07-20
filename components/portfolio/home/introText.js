import { Bold, Container } from '../../../styles/portfolio/introTextStyles';
const IntroText = () => {
  return (
    <Container>
      <h2>
        <span style={{ opacity: '0.4' }}>Hi, I am </span>
        <Bold>
          Ra<span style={{ color: 'white' }}>hul</span>
        </Bold>
      </h2>
      <p>
        Over the past 3 years, as a developer and designer, I’ve worked with
        up-and-coming startups to successfully help them reach their full
        potential and attract new customers.
      </p>
    </Container>
  );
};

export default IntroText;
