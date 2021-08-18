import Image from 'next/image';
import {
  CreditsContainer,
  LogoContainer,
} from '../../../styles/portfolio/layoutStyles';

export default function Credits() {
  return (
    <CreditsContainer>
      <LogoContainer>
        <Image src={'/logo.png'} width={60} height={40} />
        <div>
          <h3>© 2021 Rahul Sharma</h3>
        </div>
      </LogoContainer>
    </CreditsContainer>
  );
}
