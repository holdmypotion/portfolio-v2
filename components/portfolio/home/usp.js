import { Container } from '../../../styles/portfolio/globalStyles';
import {
  Heading,
  Para,
  ParaContainer,
  SubHeading,
  USPContainer,
  InternalContainer,
} from '../../../styles/portfolio/uspStyles';

export default function USP() {
  return (
    <USPContainer>
      <Container>
        <InternalContainer>
          <Heading>
            Your website should <br /> turn <span> visitors</span> into <br />{' '}
            <span>engaged</span> customers.
          </Heading>
          <SubHeading>
            It’s like having a top-performing sales rep <br /> working{' '}
            <span> 24 hours a day, 7 days a week.</span>
          </SubHeading>
          <ParaContainer>
            <Para>
              In today’s busy world, your customers are constantly bombarded
              with different marketing messages, which makes it significantly
              more difficult for customers to focus and make right choice. In
              order to stand out from the noise, your signal should be clear and
              precise.
              <br /> <br />
              From <span> Pre-Seed to Series A, </span> I help startups create
              relationship with their customers, by communicating their
              functional message, personality and values to prospective
              customer, trough clear, comprehensible design and memorable
              customer experience.
            </Para>
          </ParaContainer>
        </InternalContainer>
      </Container>
    </USPContainer>
  );
}
