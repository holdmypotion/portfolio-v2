import { ContactContainer } from '../../../styles/portfolio/contactStyles';
import { Container } from '../../../styles/portfolio/globalStyles';
import Marquee from '../UI/marquee';

export default function Contact() {
  return (
    <ContactContainer>
      <Marquee text={`Let's Work Together.`} />
      <Container>
        <h1>Contact</h1>
        <div style={{ height: '100vh' }}></div>
      </Container>
    </ContactContainer>
  );
}
