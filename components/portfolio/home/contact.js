import { useState } from "react";
import Image from "next/image";
import {
  ContactContainer,
  ContentContainer,
  ExtraInfo,
  Heading,
  ImageContainer,
  Input,
  ContactForm,
  Label,
  InputContainer,
  InputWrapper,
  TextArea,
  Submit,
} from "../../../styles/portfolio/contactStyles";
import { Container } from "../../../styles/portfolio/globalStyles";
import Marquee from "../UI/marquee";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ContactContainer>
      <Marquee text={`Let's Work Together.`} />
      <Container id="contact">
        <ContentContainer>
          <ExtraInfo>
            {/* <Heading>Get in touch</Heading> */}
            <ImageContainer>
              <Image
                src={"/images/source.gif"}
                layout="fill"
                objectPosition="center"
                objectFit="cover"
              />
            </ImageContainer>
          </ExtraInfo>
          <ContactForm>
            <InputContainer>
              <Label for="name">Your name</Label>
              <InputWrapper>
                <Input
                  id="name"
                  type="text"
                  placeholder={`What's your name?`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <span>
                  <i></i>
                </span>
              </InputWrapper>
            </InputContainer>
            <InputContainer>
              <Label for="email">Your email</Label>
              <InputWrapper>
                <Input
                  id="email"
                  type="text"
                  placeholder={`What's your email address?`}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span>
                  <i></i>
                </span>
              </InputWrapper>
            </InputContainer>
            <InputContainer medium>
              <Label for="subject">Subject</Label>
              <InputWrapper>
                <Input
                  id="subject"
                  type="text"
                  placeholder={`What's it about?`}
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
                <span>
                  <i></i>
                </span>
              </InputWrapper>
            </InputContainer>
            <InputContainer large>
              <Label for="message">Message</Label>
              <InputWrapper>
                <TextArea
                  id="message"
                  rows="2"
                  placeholder={`Want to elaborate?`}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <span>
                  <i></i>
                </span>
              </InputWrapper>
            </InputContainer>
            <div>
              <Submit>Send Message</Submit>
            </div>
          </ContactForm>
        </ContentContainer>
      </Container>
    </ContactContainer>
  );
}
