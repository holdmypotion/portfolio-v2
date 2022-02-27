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
                <Thumbnail
                  key={project.slug}
                  style={{ marginLeft: reverse ? "auto" : 0 }}
                >
                  <Link href={project.slug}>
                    <a>
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
                    </a>
                  </Link>
                </Thumbnail>
              );
            })}
          </ThumbnailContainer>
        </Header>
      </ProjectContainer>
    </Container>
  );
};

export default ProjectSection;
