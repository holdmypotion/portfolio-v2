import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
  const [state, handleSubmit] = useForm("mleznblp");
  const [submitted, setSubmitted] = useState(false);
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
            <ImageContainer>
              <Image
                src={"/images/cuate.svg"}
                width={640}
                height={580}
                layout="responsive"
                objectPosition="center"
                objectFit="cover"
              />
            </ImageContainer>
          </ExtraInfo>
          {state.succeeded && (
            <ExtraInfo>
              <ImageContainer>
                <Image
                  src={"/images/sent.gif"}
                  layout="fill"
                  objectPosition="center"
                  objectFit="cover"
                />
              </ImageContainer>
            </ExtraInfo>
          )}
          {!state.succeeded && (
            <ContactForm onSubmit={handleSubmit}>
              <InputContainer>
                <Label for="name">Your name</Label>
                <InputWrapper>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={`What's your name?`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span>
                    <i></i>
                  </span>
                </InputWrapper>
                <ValidationError
                  style={{ color: "#F4955C" }}
                  prefix="Name"
                  field="Name"
                  errors={state.errors}
                />
              </InputContainer>
              <InputContainer>
                <Label for="email">Your email</Label>
                <InputWrapper>
                  <Input
                    id="email"
                    type="text"
                    name="email"
                    placeholder={`What's your email address?`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>
                    <i></i>
                  </span>
                </InputWrapper>
                <ValidationError
                  style={{ color: "#F4955C" }}
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </InputContainer>
              <InputContainer medium>
                <Label for="subject">Subject</Label>
                <InputWrapper>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder={`What's it about?`}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <span>
                    <i></i>
                  </span>
                </InputWrapper>
                <ValidationError
                  style={{ color: "#F4955C" }}
                  prefix="Subject"
                  field="Subject"
                  errors={state.errors}
                />
              </InputContainer>
              <InputContainer large>
                <Label for="message">Message</Label>
                <InputWrapper>
                  <TextArea
                    id="message"
                    rows="2"
                    name="message"
                    placeholder={`Want to elaborate?`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <span>
                    <i></i>
                  </span>
                </InputWrapper>
                <ValidationError
                  style={{ color: "#F4955C" }}
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </InputContainer>
              <div>
                <Submit type="submit" disabled={state.submitting}>
                  Send Message
                </Submit>
              </div>
            </ContactForm>
          )}
        </ContentContainer>
      </Container>
    </ContactContainer>
  );
}
