import { Container } from "../../../styles/portfolio/globalStyles";
import {
  Heading,
  Para,
  ParaContainer,
  SubHeading,
  USPContainer,
  InternalContainer,
} from "../../../styles/portfolio/uspStyles";

export default function USP() {
  return (
    <USPContainer>
      <Container>
        <InternalContainer>
          <Heading>
            Your website should <br /> transform <span> visitors</span> into{" "}
            <br /> <span>engaged</span> clients.
          </Heading>
          <SubHeading>
            It resembles having a top-performing sales rep <br /> working{" "}
            <span> 24 hours a day, 7 days a week.</span>
          </SubHeading>
          <ParaContainer>
            <Para>
              In the modern world, your clients are continually barraged with
              various promoting messages, which makes all but impossible for
              customers to concentration and make the right choice. To stand
              apart from the noise, your brand should be clear and precise.
              <br /> <br />
              From <span> Pre-Seed to Series A, </span> I assist startups create
              meaningful relationships with their customers, by communicating
              their brand, mission, vision, and values to prospective customer,
              trough clear, comprehensible design and memorable customer
              experience.
            </Para>
          </ParaContainer>
        </InternalContainer>
      </Container>
    </USPContainer>
  );
}
