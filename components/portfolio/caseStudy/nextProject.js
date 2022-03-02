import Link from "next/link";
import Image from "next/image";
import {
  NextProjectContainer,
  Overlay,
  Title,
  TitleBox,
} from "../../../styles/portfolio/caseStudyStyles";

import Marquee from "../UI/marquee";

export default function NextProject({ title, slug, image }) {
  return (
    <>
      <Marquee text="Next Project" />
      <Link href={"/" + slug}>
        <NextProjectContainer>
          <Image
            src={"https:" + image.fields.file.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Overlay />
          <TitleBox>
            <Link href={"/" + slug}>
              <a>
                <Title>{title}</Title>
              </a>
            </Link>
          </TitleBox>
        </NextProjectContainer>
      </Link>
    </>
  );
}
