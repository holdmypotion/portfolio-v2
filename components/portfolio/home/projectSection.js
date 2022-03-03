import Link from "next/link";
import Image from "next/image";
import { Container } from "../../../styles/portfolio/globalStyles";
import {
  Button,
  ProjectContainer,
  Content,
  Description,
  Header,
  Heading,
  Overlay,
  SubHeading,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "../../../styles/portfolio/projectSectionStyles";

const ProjectSection = ({ subHeading, heading, projects }) => {
  return (
    <Container id="projects">
      <ProjectContainer>
        <Header>
          <SubHeading>{subHeading}</SubHeading>
          <Heading>{heading}</Heading>
          <ThumbnailContainer>
            {projects.map((project, index) => {
              project = project.fields;
              let reverse = false;
              if (index % 2 !== 0) {
                reverse = true;
              }
              return (
                <Link href={project.slug}>
                  <Thumbnail
                    key={project.slug}
                    style={{ marginLeft: reverse ? "auto" : 0 }}
                  >
                    <Image
                      src={"https:" + project.featuredImage.fields.file.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <Overlay />
                    <Content>
                      <Title>{project.title}</Title>
                      <Description>{project.subHeading}</Description>
                      <Button>
                        <Link href={project.slug}>
                          <a>Case Study</a>
                        </Link>
                      </Button>
                    </Content>
                  </Thumbnail>
                </Link>
              );
            })}
          </ThumbnailContainer>
        </Header>
      </ProjectContainer>
    </Container>
  );
};

export default ProjectSection;
